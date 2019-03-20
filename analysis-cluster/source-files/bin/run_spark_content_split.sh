#!/usr/bin/env bash

set +x
set -e
echo "===========================================$0 $@"

MASTER=$1
MEMORY=$2

OUTPUT_DIR=spark-emails-text
if [[ -d "pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR"
fi

if [[ -d "pst-extract/spark-emails-attachments" ]]; then
    rm -rf "pst-extract/spark-emails-attachments"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --files source-files/scripts/filters.py source-files/scripts/attachment_split.py pst-extract/spark-emails-attach-exif pst-extract/$OUTPUT_DIR  pst-extract/spark-emails-attachments 

/usr/src/app/source-files/bin/validate_lfs.sh $OUTPUT_DIR
