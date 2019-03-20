#!/usr/bin/env bash

MASTER=$1
MEMORY=$2
FORCE_LANGUAGE=$3
TYPE=$4
MOSES_SERVER=$5

set +x
set -e
echo "===========================================$0 $@"

OUTPUT_DIR=spark-emails-translation
if [[ -d "pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --files source-files/scripts/moses_translator.py,source-files/scripts/filters.py source-files/scripts/translation.py pst-extract/spark-emails-with-topics pst-extract/$OUTPUT_DIR --force_language $FORCE_LANGUAGE --translation_mode $TYPE --moses_server $MOSES_SERVER

/usr/src/app/source-files/bin/validate_lfs.sh $OUTPUT_DIR
