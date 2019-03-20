#!/bin/bash
#  vim:ts=4:sts=4:sw=4:et
#
#  Author: Hari Sekhon
#  Date: 2016-01-26 22:51:25 +0000 (Tue, 26 Jan 2016)
#
#  https://github.com/harisekhon/Dockerfiles/spark
#
#  License: see accompanying Hari Sekhon LICENSE file
#
#  If you're using my code you're welcome to connect with me on LinkedIn and optionally send me feedback
#
#  https://www.linkedin.com/in/harisekhon
#

set -euo pipefail
[ -n "${DEBUG:-}" ] && set -x

export JAVA_HOME="${JAVA_HOME:-/usr}"

export SPARK_DAEMON_MEMORY="${SPARK_DAEMON_MEMORY:-128M}"

export SPARK_HOME="/spark"

mkdir -pv "$SPARK_HOME/logs"

if grep -q "^[[:space:]]*SPARK_DAEMON_MEMORY" "$SPARK_HOME/conf/spark-env.sh"; then
    sed -i "s/^[[:space:]]SPARK_DAEMON_MEMORY.*/SPARK_DAEMON_MEMORY=$SPARK_DAEMON_MEMORY/" "$SPARK_HOME/conf/spark-env.sh"
else
    echo "export SPARK_DAEMON_MEMORY=$SPARK_DAEMON_MEMORY" >> "$SPARK_HOME/conf/spark-env.sh" >> "$SPARK_HOME/conf/spark-env.sh"
fi

echo -e "\nStarting Master"
$SPARK_HOME/bin/spark-class org.apache.spark.deploy.master.Master &>/spark/logs/master.log &
sleep 2

echo -e "\nStarting Worker"
$SPARK_HOME/bin/spark-class org.apache.spark.deploy.worker.Worker spark://$(hostname -f):7077 &>/spark/logs/worker.log &
sleep 2

if [ -t 0 ]; then
    echo -e "\nStarting Spark Shell to connect to standalone daemons\n"
    # less than about 480m SQLContext fails to load and gets a bunch of NPEs
    $SPARK_HOME/bin/spark-shell --driver-memory 500m --master spark://$(hostname -f):7077
    echo -e "\n\nSpark Shell exited\n\n"
else
    echo -e "
Spark Shell will not be opened as this container is not running in interactive mode
To open Spark Shell in future start docker with the switches:
docker run -t -i ...
"
fi
echo -e "\n\nWill now read logs to keep container alive until killed...\n\n"
tail -f $SPARK_HOME/logs/* &
wait || :