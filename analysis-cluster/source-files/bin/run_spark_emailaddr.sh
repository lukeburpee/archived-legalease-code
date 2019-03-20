#!/usr/bin/env bash

set +x
set -e

echo "===========================================$0 $@"

MASTER=$1
MEMORY=$2
INGEST_ID=$3
CASE_ID=$4
ALTERNATE_ID=$5
LABEL=$6
JSON_VALIDATION_FLAG=$7

OUTPUT_DIR='spark-emailaddr'
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --files /usr/src/app/source-files/scripts/filters.py /usr/src/app/source-files/scripts/emailaddr_agg.py file:///usr/src/app/pst-extract/spark-emails-text/ file:///usr/src/app/pst-extract/$OUTPUT_DIR --ingest_id $INGEST_ID --case_id $CASE_ID --alt_ref_id $ALTERNATE_ID --label $LABEL $JSON_VALIDATION_FLAG 

/usr/src/app/source-files/bin/validate_lfs.sh $OUTPUT_DIR
