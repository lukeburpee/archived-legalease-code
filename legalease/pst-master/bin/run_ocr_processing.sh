#!/usr/bin/env bash

set +x
set -e

MEMORY=$1

echo "===========================================$0"

OUTPUT_DIR='ocr_output'
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master local[*] --driver-memory $MEMORY --files spark/filters.py,ocr/ocr_opencv.py,ocr/resize_image.py ocr/run_ocr.py file:///usr/src/app/pst-extract/pst-json file:///usr/src/app/pst-extract/$OUTPUT_DIR

