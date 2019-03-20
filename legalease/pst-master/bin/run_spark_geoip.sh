#!/usr/bin/env bash

set +x
set -e
echo "===========================================$0 $@"

MEMORY=$1

OUTPUT_DIR=spark-emails-geoip
if [[ -d "/usr/src/app/pst-extract/$OUTPUT_DIR" ]]; then
    rm -rf "/usr/src/app/pst-extract/$OUTPUT_DIR"
fi

spark-submit --master local[*] --driver-memory $MEMORY --files spark/filters.py spark/geoip_extraction.py file:///usr/src/app/pst-extract/spark-emails-entity file:///usr/src/app/pst-extract/$OUTPUT_DIR --geodb etc/GeoLite2-City.mmdb 

./bin/validate_lfs.sh $OUTPUT_DIR

