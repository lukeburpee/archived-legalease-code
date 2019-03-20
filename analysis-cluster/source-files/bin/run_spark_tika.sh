#!/usr/bin/env bash

set -e
set +x

echo "===========================================$0"

MASTER=$1
MEMORY=$2

OUTPUT_DIR=spark-attach
if [[ -d "pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "pst-extract/$OUTPUT_DIR"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

/usr/local/spark/bin/spark-submit --master $MASTER --driver-memory $MEMORY --conf $CONF --class com.soteradefense.newman.TikaExtraction source-files/lib/newman-spark-tika-0.1-SNAPSHOT-jar-with-dependencies.jar -i pst-extract/pst-json -o pst-extract/$OUTPUT_DIR

/usr/src/app/source-files/bin/validate_lfs.sh $OUTPUT_DIR
