#!/usr/bin/env bash
#TODO temporary until we can unify doc and email attachment pipelines
#TODO Then this will be removed

set +x
MEMORY=$1
EXTRACT_FIELD=$2
if [[ -d "pst-extract/spark-attachments_entities" ]]; then
    rm -rf "pst-extract/spark-attachments_entities"
fi

spark-submit --master local[*] --driver-memory $MEMORY  --files mitie.py,libmitie.so,ner_model.dat source-files/scripts/mitie_entity_ingest_file.py pst-extract/spark-emails-attachments pst-extract/spark-attachments_entities --extract_field $EXTRACT_FIELD
