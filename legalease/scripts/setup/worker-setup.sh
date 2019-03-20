#!/bin/bash

set -e
echo -e "\033[1m Starting Mongo-Elastic Sync configuration" && \
	echo 'checking Mongo Replica Set...' && \
	./wait-for-it.sh -t 200 -h mongo1 -p 27017 && \
	./wait-for-it.sh -t 200 -h mongo2 -p 27017 && \
	./wait-for-it.sh -t 200 -h mongo3 -p 27017 -- echo "Mongo replica set OK" 
	echo 'checking Elastic Cluster...' && \
	./wait-for-it.sh -t 200 -h elastic1 -p 9200 -- echo 'Elastic Cluster OK' && \
	./wait-for-it.sh -t 200 -h app -p 3000  -- echo 'Connection to Primary Application Established' && \
	node worker-server.js
