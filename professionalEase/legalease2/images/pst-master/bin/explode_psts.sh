#!/usr/bin/env bash

set +x
set -e

if [[ -d "/usr/src/app/pst-extract/mbox/" ]]; then
    rm -rf "/usr/src/app/pst-extract/mbox/"
fi

mkdir "/usr/src/app/pst-extract/mbox/"

for f in /usr/src/app/pst-extract/pst/*.pst;
do
    readpst -r -j 8 -o /usr/src/app/pst-extract/mbox ${f};
done;
