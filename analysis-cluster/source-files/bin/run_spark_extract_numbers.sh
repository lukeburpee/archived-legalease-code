#!/usr/bin/env bash

set -e
set +x

echo "===========================================$0 $@"

MASTER=$1
MEMORY=$2

OUTPUT_DIR=spark-emails-with-numbers
if [[ -d "pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --files source-files/scripts/filters.py source-files/scripts/numbers_extractor.py pst-extract/spark-emails-attach pst-extract/$OUTPUT_DIR 

/usr/src/app/source-files/bin/validate_lfs.sh $OUTPUT_DIR
