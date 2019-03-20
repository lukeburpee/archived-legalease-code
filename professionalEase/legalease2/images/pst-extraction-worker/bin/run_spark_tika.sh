#!/usr/bin/env bash

set -e
set +x

echo "===========================================$0"

MASTER=$1
MEMORY=$2

OUTPUT_DIR=spark-attach
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master $MASTER --driver-memory $MEMORY --deploy-mode "cluster" --class com.soteradefense.newman.TikaExtraction lib/newman-spark-tika-0.1-SNAPSHOT-jar-with-dependencies.jar -i /usr/src/app/pst-extract/pst-json -o /usr/src/app/pst-extract/$OUTPUT_DIR

./bin/validate_lfs.sh $OUTPUT_DIR
