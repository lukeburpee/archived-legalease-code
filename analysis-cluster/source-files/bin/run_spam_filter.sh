#!/usr/bin/env bash

set +x

if [[ -d "pst-extract/post-spam-filter" ]]; then
    rm -rf "pst-extract/post-spam-filter"
fi

CONF="spark.mongodb.input.uri=mongodb://mongo-one:27017/ spark.mongodb.input.database=analysis spark.mongodb.input.collection=email spark.mongodb.input.readPreference.name=primaryPreferred"

spark-submit --master local[*] --driver-memory 8g --conf spark.storage.memoryFraction=.8 --conf $CONF --files spark/naive_bayes_classifier.pkl spark/spam_filter_harness.py pst-extract/pst-json pst-extract/post-spam-filter
