#!/usr/bin/env bash

MEMORY=$1
FORCE_LANGUAGE=$2
MODE=$3
MOSES_SERVER=$4

set +x
set -e
echo "===========================================$0 $@"

OUTPUT_DIR=spark-emails-translation
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master local[*] --driver-memory $MEMORY --files spark/moses_translator.py,spark/filters.py spark/translation.py file:///usr/src/app/pst-extract/spark-emails-with-topics file:///usr/src/app/pst-extract/$OUTPUT_DIR --force_language $FORCE_LANGUAGE --translation_mode $MODE --moses_server $MOSES_SERVER

./bin/validate_lfs.sh $OUTPUT_DIR
