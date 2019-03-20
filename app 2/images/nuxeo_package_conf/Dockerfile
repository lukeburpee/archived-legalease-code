FROM busybox

ADD packages/easyshare-1.3.3.zip /docker-entrypoint-initnuxeo.d/
ADD packages/fs-exporter-1.4.2.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-agenda-1.4.1.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-csv-1.5.3.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-diff-1.7.2.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-diff-pictures-1.1.2.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-drive-1.6.2.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-liveconnect-1.1.2.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-platform-user-registration-1.7.2.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-quota-1.6.2.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-spreadsheet-1.2.2.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-timeoff-1.0.7.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-travel-expenses-1.1.2.zip /docker-entrypoint-initnuxeo.d/
ADD packages/nuxeo-web-ui-0.7.0.zip /docker-entrypoint-initnuxeo.d/

ADD docker /docker-entrypoint-initnuxeo.d/

VOLUME /docker-entrypoint-initnuxeo.d/

RUN /bin/true