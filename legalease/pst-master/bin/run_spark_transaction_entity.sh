#!/usr/bin/env bash

set +x
set -e
echo "===========================================$0 $@"

MEMORY=$1

OUTPUT_DIR=spark-emails-transaction
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master local[*] --driver-memory $MEMORY --files spark/filters.py spark/extract_transaction.py file:///usr/src/app/pst-extract/spark-emails-geoip file:///usr/src/app/pst-extract/$OUTPUT_DIR

./bin/validate_lfs.sh $OUTPUT_DIR

