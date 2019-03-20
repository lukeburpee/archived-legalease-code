#!/usr/bin/env bash

set +x
set -e
echo "===========================================$0 $@"

RUN_FLAGS=$@
echo "mode=$RUN_FLAGS"


OUTPUT_DIR=spark-emails-transaction
if [[ -d "pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR"
fi

spark-submit --master local[*] --driver-memory 8g --conf spark.storage.memoryFraction=.8 --files spark/filters.py spark/extract_transaction.py pst-extract/spark-emails-geoip pst-extract/$OUTPUT_DIR ${RUN_FLAGS}

./bin/validate_lfs.sh $OUTPUT_DIR

