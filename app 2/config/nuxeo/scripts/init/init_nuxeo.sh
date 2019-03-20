echo "Launching Nuxeo Init..."

echo 'checking Mongo...'
/scripts/wait-for-it.sh -t 200 mongo:27017 -- echo 'Mongo OK'

echo 'checking Elasticsearch...'
/scripts/wait-for-it.sh -t 200 elastic1:9300 -- echo 'First Shard OK'
/scripts/wait-for-it.sh -t 200 elastic2:9300 -- echo 'Second Shard OK'
echo 'Elasticsearch OK'

echo 'checking Redis...'
/scripts/wait-for-it.sh -t 200 redis:6379 -- echo 'Redis OK'

exec nuxeoctl console