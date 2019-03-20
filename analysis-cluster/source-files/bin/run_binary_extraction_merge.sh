#!/usr/bin/env bash

set -e
set +x

echo "===========================================$0 $@"
#
#Mode should be either left off or --docex_mode which will enable copy of extracted data into the body field
#
MASTER=$1
MEMORY=$2

INPUT_RIGHT_SIDE_DIRS=pst-extract/spark-attach/
#,pst-extract/ocr_output/
OUTPUT_DIR=spark-emails-attach-text
if [[ -d "pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR"
fi
OUTPUT_DIR2=spark-emails-attach-classification
if [[ -d "pst-extract/$OUTPUT_DIR2" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR2"
fi

OUTPUT_DIR_FINAL=spark-emails-attach
if [[ -d "pst-extract/$OUTPUT_DIR_FINAL" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR_FINAL"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --files source-files/scripts/filters.py source-files/scripts/attachment_join.py pst-extract/pst-json/ $INPUT_RIGHT_SIDE_DIRS pst-extract/$OUTPUT_DIR 
/usr/src/app/source-files/bin/validate_lfs.sh $OUTPUT_DIR

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --files source-files/scripts/filters.py source-files/scripts/attachment_join.py pst-extract/$OUTPUT_DIR pst-extract/spark-image-classifier/ pst-extract/$OUTPUT_DIR2 
/usr/src/app/source-files/bin/validate_lfs.sh $OUTPUT_DIR2

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --files source-files/scripts/filters.py source-files/scripts/attachment_join.py pst-extract/$OUTPUT_DIR2 pst-extract/ocr_output/ pst-extract/$OUTPUT_DIR_FINAL 
/usr/src/app/source-files/bin/validate_lfs.sh $OUTPUT_DIR_FINAL


