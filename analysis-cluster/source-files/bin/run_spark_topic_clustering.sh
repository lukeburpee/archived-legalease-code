#!/usr/bin/env bash

set +x
set -e
echo "===========================================$0"

MASTER=$1
MEMORY=$2

if [[ -d "pst-extract/spark-lda-input" ]]; then
    rm -rf "pst-extract/spark-lda-input"
fi

if [[ -f "tmp/vocab.idx" ]]; then
    rm -rf "tmp/vocab.idx"
fi

if [[ -f "tmp/lda.map.txt" ]]; then
    rm -rf "tmp/lda.map.txt"
fi

if [[ -d "pst-extract/spark-lda-results" ]]; then
    rm -rf  "pst-extract/spark-lda-results"
fi

OUTPUT_DIR=spark-emails-with-topics
if [[ -d "pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

/usr/local/spark/bin/spark-submit --master $MASTER --conf $CONF --driver-memory $MEMORY source-files/scripts/topic_clustering.py --stopwords source-files/etc/english.stopwords --vocab_index tmp/vocab.idx pst-extract/spark-emails-with-communities pst-extract/spark-lda-input

/usr/local/spark/bin/spark-submit --master $MASTER --conf $CONF --driver-memory $MEMORY --class newman.Driver source-files/lib/newman-lda-topics_2.10-1.0.0.jar "pst-extract/spark-lda-input/part-*" "pst-extract/spark-lda-results" "tmp/vocab.idx" "tmp/lda.map.txt"

/usr/local/spark/bin/spark-submit --master $MASTER --conf $CONF --driver-memory $MEMORY source-files/scripts/lda_merge.py pst-extract/spark-emails-with-communities pst-extract/spark-lda-results pst-extract/$OUTPUT_DIR

/usr/src/app/source-files/bin/validate_lfs.sh $OUTPUT_DIR
