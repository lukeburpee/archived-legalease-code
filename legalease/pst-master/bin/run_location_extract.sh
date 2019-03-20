#!/usr/bin/env bash

set +x

if [[ ! -d "/usr/src/app/etc/location/index" ]]; then
    printf "missing clavin index @ etc/location/index\n"
    exit 1
fi

if [[ ! -d "/usr/src/app/pst-extract/spark-emails-text" ]]; then
    printf "missing input directory pst-extract/spark-emails-text"
    exit 1
fi

if [[ -d "/usr/src/app/pst-extract/email-locations" ]]; then
    rm -rf "/usr/src/app/pst-extract/email-locations"
fi

mkdir -p "pst-extract/email-locations"

java -cp .:extras/location-extraction/lib/* clojure.main /usr/src/app/extras/location-extraction/src/location.clj "/usr/src/app/etc/location/index" "/usr/src/app/pst-extract/spark-emails-text" "/usr/src/app/pst-extract/email-locations"
