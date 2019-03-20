#!/usr/bin/env bash

set +x
set -e

echo "===========================================$0"

MASTER=$1
MEMORY=$2

OUTPUT_DIR='ocr_output'
if [[ -d "pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --files source-files/scripts/filters.py,source-files/ocr/ocr_opencv.py,source-files/ocr/resize_image.py source-files/ocr/run_ocr.py pst-extract/pst-json pst-extract/$OUTPUT_DIR

