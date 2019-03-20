echo "Launching Nuxeo Init..."

echo 'checking Mongo...'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 mongo:27017 -- echo 'Mongo OK'

echo 'checking Elasticsearch...'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 elastic1:9300 -- echo 'First Shard OK'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 elastic2:9300 -- echo 'Second Shard OK'
echo 'Elasticsearch OK'

echo 'checking Redis...'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 redis:6379 -- echo 'Redis OK'

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl console