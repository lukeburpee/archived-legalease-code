#!/usr/bin/env bash

set -e
set +x

echo "===========================================$0 $@"
#
#Mode should be either left off or --docex_mode which will enable copy of extracted data into the body field
#
MEMORY=$1

INPUT_RIGHT_SIDE_DIRS=file:///usr/src/app/pst-extract/spark-attach/
#,pst-extract/ocr_output/
OUTPUT_DIR=spark-emails-attach-text
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi
OUTPUT_DIR2=spark-emails-attach-classification
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR2" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR2"
fi

OUTPUT_DIR_FINAL=spark-emails-attach
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR_FINAL" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR_FINAL"
fi

spark-submit --master local[*] --driver-memory $MEMORY --files spark/filters.py spark/attachment_join.py file:///usr/src/app/pst-extract/pst-json/ $INPUT_RIGHT_SIDE_DIRS file:///usr/src/app/pst-extract/$OUTPUT_DIR 
./bin/validate_lfs.sh $OUTPUT_DIR

spark-submit --master local[*] --driver-memory $MEMORY --files spark/filters.py spark/attachment_join.py file:///usr/src/app/pst-extract/$OUTPUT_DIR file:///usr/src/app/pst-extract/spark-image-classifier/ file:///usr/src/app/pst-extract/$OUTPUT_DIR2 
./bin/validate_lfs.sh $OUTPUT_DIR2

spark-submit --master local[*] --driver-memory $MEMORY --files spark/filters.py spark/attachment_join.py file:///usr/src/app/pst-extract/$OUTPUT_DIR2 file:///usr/src/app/pst-extract/ocr_output/ file:///usr/src/app/pst-extract/$OUTPUT_DIR_FINAL 
./bin/validate_lfs.sh $OUTPUT_DIR_FINAL


