#!/usr/bin/env bash

set +x
set -e
echo "===========================================$0 $@"

MASTER=$1
MEMORY=$2
EXTRACT_FIELD=$3

OUTPUT_DIR=spark-emails-entity
if [[ -d "pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --files source-files/scripts/filters.py,packages/mitie.py,packages/libmitie.so,static-data/ner_model_english.dat,static-data/ner_model_spanish.dat source-files/scripts/mitie_entity_ingest_file.py pst-extract/spark-emails-translation pst-extract/$OUTPUT_DIR --extract_field $EXTRACT_FIELD

/usr/src/app/source-files/bin/validate_lfs.sh $OUTPUT_DIR
