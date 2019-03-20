#!/usr/bin/env bash

set -e
set +x

echo "===========================================$0 $@"

MEMORY=$1

OUTPUT_DIR=spark-emails-with-numbers
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi


spark-submit --master local[*] --driver-memory $MEMORY --files spark/filters.py spark/numbers_extractor.py file:///usr/src/app/pst-extract/spark-emails-attach file:///usr/src/app/pst-extract/$OUTPUT_DIR 

./bin/validate_lfs.sh $OUTPUT_DIR
