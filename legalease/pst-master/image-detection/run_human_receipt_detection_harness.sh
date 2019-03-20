#!/usr/bin/env bash

set +x
set -e

echo "===========================================$0"

OUTPUT_DIR='human_receipt_detection_output'
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master local[*] --driver-memory 2g --files image-detection/hog_gist_feature_extraction.py,image-detection/default_param.py,image-detection/gabor_features.py,image-detection/human_classifier.pkl,image-detection/receipt_classifier.pkl,image-detection/SLIP.py,image-detection/resize_image.py,image-detection/LogGabor.py --conf image-detection/run_human_receipt_detection.py file:///usr/src/app/pst-extract/pst-json file:///usr/src/app/pst-extract/$OUTPUT_DIR

