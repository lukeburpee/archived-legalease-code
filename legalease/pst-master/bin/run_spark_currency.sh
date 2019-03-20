#!/usr/bin/env bash
#
# Write all the attachments to lfs

set +x

mkdir -p tmp

spark-submit --master local[*] --driver-memory 8g --conf spark.storage.memoryFraction=.8 spark/extract_transaction.py file:///usr/src/app/pst-extract/spark-emails-text "file:///usr/src/app/tmp/currency.csv"
