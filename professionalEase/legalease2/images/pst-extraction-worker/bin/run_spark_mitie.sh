#!/usr/bin/env bash

set +x
set -e
echo "===========================================$0 $@"

MASTER=$1
MEMORY=$2

OUTPUT_DIR=spark-emails-entity
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master $MASTER --driver-memory $MEMORY --deploy-mode "cluster" --py-files spark/filters.py,mitie.py,libmitie.so,ner_model_english.dat,ner_model_spanish.dat spark/mitie_entity_ingest_file.py /usr/src/app/pst-extract/spark-emails-translation /usr/src/app/pst-extract/$OUTPUT_DIR --extract_field body

./bin/validate_lfs.sh $OUTPUT_DIR