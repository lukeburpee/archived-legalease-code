#!/usr/bin/env bash

set +x
set -e

echo "===========================================$0 $@"

MEMORY=$1

OUTPUT_DIR=spark-emails-attach-exif
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master local[*] --driver-memory $MEMORY --files spark/filters.py spark/image_exif_processing.py file:///usr/src/app/pst-extract/spark-emails-with-numbers file:///usr/src/app/pst-extract/$OUTPUT_DIR

./bin/validate_lfs.sh $OUTPUT_DIR
