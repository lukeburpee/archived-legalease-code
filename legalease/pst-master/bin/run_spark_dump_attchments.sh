#!/usr/bin/env bash
#
# Write all the attachments to lfs

set +x

if [[ -d "/usr/src/app/tmp/attachments" ]]; then
    rm -rf  "/usr/src/app/tmp/attachments"
fi


mkdir -p tmp/attachments

spark-submit --master local[*] --driver-memory 8g --conf spark.storage.memoryFraction=.8 spark/dump_attachments.py file:///usr/src/app/pst-extract/pst-json "file:///usr/src/app/tmp/attachments"
