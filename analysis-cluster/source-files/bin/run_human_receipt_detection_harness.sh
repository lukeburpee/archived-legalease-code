#!/usr/bin/env bash

set +x
set -e

echo "===========================================$0"

MASTER=$1
MEMORY=$2

OUTPUT_DIR='spark-image-classifier'
if [[ -d "pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --py-files source-files/image-detection/neuro.zip --files source-files/image-detection/hog_gist_feature_extraction.py,source-files/image-detection/default_param.py,source-files/image-detection/gabor_features.py,source-files/image-detection/human_classifier.pkl,source-files/image-detection/receipt_classifier.pkl,source-files/image-detection/SLIP.py,source-files/image-detection/resize_image.py,source-files/image-detection/LogGabor.py  source-files/image-detection/run_human_receipt_detection.py pst-extract/pst-json pst-extract/$OUTPUT_DIR

