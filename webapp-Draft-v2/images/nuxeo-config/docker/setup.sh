#!/bin/bash

set +e

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep jsf-ui
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-jsf-ui-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep dam
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-dam-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep box-api
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-box-api-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep platform-smart-search
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-platform-smart-search-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep api-playground
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-api-playground-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep cc-connector-marketplace
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-cc-connector-marketplace-1.2.1-SNAPSHOT.zip  --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep groups-rights-audit
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-groups-rights-audit-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep imap-connector
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-imap-connector-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep jenkins-report-mp
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-jenkins-report-mp-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep mediapublishing
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-mediapublishing-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep platform-importer
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-platform-importer-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep platform-smart-search
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-platform-smart-search-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep review-workflows-dashboards
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-review-workflows-dashboards-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep signature
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-signature-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep template-rendering
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-template-rendering-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep vision
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-vision-*.zip --relax=false --accept=true --nodeps
fi

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep multi-tenant
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-multi-tenant-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep easyshare
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/easyshare-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep fs-exporter
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/fs-exporter-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep agenda
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-agenda-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep csv
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-csv-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep diff
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-diff-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep diff-pictures
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-diff-pictures-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep drive
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-drive-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep liveconnect
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-liveconnect-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep platform-user-registration
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-platform-user-registration-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep quota
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-quota-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep spreadsheet
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-spreadsheet-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep timeoff
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-timeoff-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep travel-expenses
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-travel-expenses-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep web-ui
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-web-ui-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep platform-explorer
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/platform-explorer-*.zip --relax=false --accept=true --nodeps
fi
gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-list|grep virtualnavigation
if [ $? -eq 1 ]; then
    gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl mp-install /docker-entrypoint-initnuxeo.d/nuxeo-virtualnavigation-*.zip --relax=false --accept=true --nodeps
fi

set -e

. /docker-entrypoint-initnuxeo.d/init/init_nuxeo.sh