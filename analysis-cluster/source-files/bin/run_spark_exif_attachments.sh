#!/usr/bin/env bash

set +x
set -e

echo "===========================================$0 $@"

MASTER=$1
MEMORY=$2

OUTPUT_DIR=spark-emails-attach-exif
if [[ -d "pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --files source-files/scripts/filters.py source-files/scripts/image_exif_processing.py pst-extract/spark-emails-with-numbers pst-extract/$OUTPUT_DIR

/usr/src/app/source-files/bin/validate_lfs.sh $OUTPUT_DIR