#!/usr/bin/env bash

set +x
set -e
echo "===========================================$0 $@"

MEMORY=$1
INGEST_ID=$2
CASE_ID=$3
ALTERNATE_ID=$4
LABEL=$5
JSON_VALIDATION_FLAG=$6

OUTPUT_DIR=spark-emailaddr
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master local[*] --driver-memory $MEMORY --files spark/filters.py spark/emailaddr_agg.py file:///usr/src/app/pst-extract/spark-emails-text file:///usr/src/app/pst-extract/$OUTPUT_DIR --ingest_id $INGEST_ID --case_id $CASE_ID --alt_ref_id $ALTERNATE_ID --label $LABEL $JSON_VALIDATION_FLAG

./bin/validate_lfs.sh $OUTPUT_DIR
