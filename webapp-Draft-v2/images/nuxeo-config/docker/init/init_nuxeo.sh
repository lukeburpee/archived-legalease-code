echo "Launching Nuxeo Init..."

chmod +x /docker-entrypoint-initnuxeo.d/init/wait-for-it.sh &&

echo 'checking Mongo replica set...'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 mongo1:27017 -- echo 'Mongo1 OK'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 mongo2:27017 -- echo 'Mongo2 OK'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 mongo3:27017 -- echo 'Mongo3 OK'
echo 'Mongo replica set OK'

echo 'checking Elasticsearch...'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 elastic1:9300 -- echo 'First Shard OK'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 elastic2:9300 -- echo 'Second Shard OK'
echo 'Elasticsearch OK'

echo 'checking Redis...'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 redis:6379 -- echo 'Redis OK'

gosu $NUXEO_USER $NUXEO_HOME/bin/nuxeoctl console