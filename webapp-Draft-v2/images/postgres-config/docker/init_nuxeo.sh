#!/bin/bash

set -e

RUN psql -v ON_ERROR_STOP=1 --username "$ADMINISTRATOR" --password "$ADMINISTRATOR" <<-EOSQL
    CREATE FUNCTION pg_catalog.text(integer) RETURNS text STRICT IMMUTABLE LANGUAGE SQL AS 'SELECT textin(int4out($1));';
    CREATE CAST (integer AS text) WITH FUNCTION pg_catalog.text(integer) AS IMPLICIT;
    COMMENT ON FUNCTION pg_catalog.text(integer) IS 'convert integer to text';
    CREATE FUNCTION pg_catalog.text(bigint) RETURNS text STRICT IMMUTABLE LANGUAGE SQL AS 'SELECT textin(int8out($1));';
    CREATE CAST (bigint AS text) WITH FUNCTION pg_catalog.text(bigint) AS IMPLICIT;
    COMMENT ON FUNCTION pg_catalog.text(bigint) IS 'convert bigint to text';
    CREATE ROLE nuxeo WITH PASSWORD 'nuxeo' LOGIN;
    CREATE DATABASE nuxeo ENCODING 'UTF8' OWNER nuxeo;

EOSQL