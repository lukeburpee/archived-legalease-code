#!/usr/bin/env bash

set +x

MEMORY=$1

if [[ -d "/usr/src/app/pst-extract/post-spam-filter" ]]; then
    rm -rf "/usr/src/app/pst-extract/post-spam-filter"
fi

spark-submit --master local[*] --driver-memory $MEMORY --files spark/naive_bayes_classifier.pkl spark/spam_filter_harness.py file:///usr/src/app/pst-extract/pst-json file:///usr/src/app/pst-extract/post-spam-filter
