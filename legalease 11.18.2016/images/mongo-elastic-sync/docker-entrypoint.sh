#!/bin/bash

set -e
echo -e "\033[1m Starting Mongo-Elastic Sync configuration" && \
	echo 'checking Mongo Replica Set...' && \
	/wait-for-it.sh -t 200 mongo1:27017 -- echo 'Mongo1 OK' && \
	/wait-for-it.sh -t 200 mongo2:27017 -- echo 'Mongo2 OK' && \
	/wait-for-it.sh -t 200 mongo3:27017 -- echo 'Mongo3 OK' && \
	echo 'Mongo replica set OK' && \
	echo 'checking Elastic Cluster...' && \
	/wait-for-it.sh -t 200 elastic1:9200 -- echo 'Elastic1 OK' && \
	/wait-for-it.sh -t 200 elastic2:9201 -- echo 'elastic2 OK' && \
	echo 'Elastic Cluster OK'

/wait-for-it.sh -t 10000 app:3000 -- node server.js
