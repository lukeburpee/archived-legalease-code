#!/usr/bin/env bash

set -e
set +x

echo "===========================================$0"

MEMORY=$1

OUTPUT_DIR=spark-attach
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master local[*] --driver-memory $MEMORY --class com.soteradefense.newman.TikaExtraction lib/newman-spark-tika-0.1-SNAPSHOT-jar-with-dependencies.jar -i file:///usr/src/app/pst-extract/pst-json -o file:///usr/src/app/pst-extract/$OUTPUT_DIR

./bin/validate_lfs.sh $OUTPUT_DIR
