#!/bin/bash

set +e

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep easyshare
> /dev/null 2>&1
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/easyshare-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep fs-exporter
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-fs-exporter-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep agenda
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-agenda-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep csv
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-csv-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep diff
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-diff-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep diff-pictures
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-diff-pictures-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep drive
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-drive-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep liveconnect
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-liveconnect-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep platform-user-registration
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-platform-user-registration-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep quota
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-quota-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep spreadsheet
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-spreadsheet-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep timeoff
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-timeoff-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep travel-expenses
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-travel-expenses-*.zip --relax=false --accept=true
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep web-ui
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-web-ui-*.zip --relax=false --accept=true
fi

set -e

. /docker-entrypoint-initnuxeo.d/init/init_nuxeo.sh