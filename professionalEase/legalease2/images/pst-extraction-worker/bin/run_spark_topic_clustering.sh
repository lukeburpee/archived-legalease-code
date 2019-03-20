#!/usr/bin/env bash

set +x
set -e
echo "===========================================$0"

MASTER=$1
MEMORY=$2

if [[ -d "/usr/src/app/pst-extract/spark-lda-input" ]]; then
    rm -rf "/usr/src/app/pst-extract/spark-lda-input"
fi

if [[ -f "/usr/src/app/tmp/vocab.idx" ]]; then
    rm -rf "/usr/src/app/tmp/vocab.idx"
fi

if [[ -f "/usr/src/app/tmp/lda.map.txt" ]]; then
    rm -rf "/usr/src/app/tmp/lda.map.txt"
fi

if [[ -d "/usr/src/app/pst-extract/spark-lda-results" ]]; then
    rm -rf  "/usr/src/app/pst-extract/spark-lda-results"
fi

OUTPUT_DIR=spark-emails-with-topics
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master local --driver-memory $MEMORY --py-files spark/topic_clustering.py --stopwords etc/english.stopwords --vocab_index tmp/vocab.idx /usr/src/app/pst-extract/spark-emails-with-communities /usr/src/app/pst-extract/spark-lda-input

spark-submit --master local --driver-memory $MEMORY --class newman.Driver lib/newman-lda-topics_2.10-1.0.0.jar "/usr/src/app/pst-extract/spark-lda-input/part-*" "/usr/src/app/pst-extract/spark-lda-results" "/usr/src/app/tmp/vocab.idx" "/usr/scr/app/tmp/lda.map.txt"

spark-submit --master local --driver-memory $MEMORY --py-files spark/lda_merge.py /usr/src/app/pst-extract/spark-emails-with-communities /usr/src/app/pst-extract/spark-lda-results /usr/src/app/pst-extract/$OUTPUT_DIR

./bin/validate_lfs.sh $OUTPUT_DIR
