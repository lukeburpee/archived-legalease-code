#!/usr/bin/env bash

set +x
set -e
echo "===========================================$0 $@"

MEMORY=$2


OUTPUT_DIR=spark-emails-with-communities
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master local --driver-memory $MEMORY --py-files spark/filters.py spark/email_community_assign.py /usr/src/app/pst-extract/spark-emails-text  /usr/src/app/pst-extract/spark-emailaddr /usr/src/app/pst-extract/$OUTPUT_DIR

./bin/validate_lfs.sh $OUTPUT_DIR

