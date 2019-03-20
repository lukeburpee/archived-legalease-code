#!/usr/bin/env bash

set +x
set -e
echo "===========================================$0 $@"

MASTER=$1
MEMORY=$2

OUTPUT_DIR=spark-emails-text
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

if [[ -d "/usr/src/app/pst-extract/spark-emails-attachments" ]]; then
    rm -rf "/usr/src/app/pst-extract/spark-emails-attachments"
fi

spark-submit --master local --driver-memory $MEMORY --py-files spark/filters.py spark/attachment_split.py /usr/src/app/pst-extract/spark-emails-attach-exif /usr/src/app/pst-extract/$OUTPUT_DIR  /usr/src/app/pst-extract/spark-emails-attachments

./bin/validate_lfs.sh $OUTPUT_DIR
