#!/bin/bash

if [[ "${1}" = 'master' ]]; then
	echo 'Setting up Spark Master...' 
	echo 'Setting up Cluster Member Dependencies...' 
	ln -s /usr/src/app/packages/packages.tar.gz /usr/src/app/packages.tar.gz 
	tar -xzf /usr/src/app/packages.tar.gz 
	echo "Starting Spark Cluster Master..." 
  # Start Spark Master
  /usr/local/spark/bin/spark-class org.apache.spark.deploy.master.Master -h $(hostname)
elif [[ "${1}" = 'worker' ]]; then
  echo "Setting up cluster member..."
  # Wait for the master to start
  while ! nc -z $2 7077; do
    sleep 5;
  done;
    echo "Sourcing Cluster Member Dependencies..." 
  	source /usr/src/app/packages/python-packages/bin/activate 
  	echo "Activating Cluster Member Server..." 
  # Start Spark Worker
  	/usr/local/spark/bin/spark-class org.apache.spark.deploy.worker.Worker spark://$2:7077
elif [[ "${1}" = 'server' ]]; then
  echo "Setting up Cluster Server..."
  while ! nc -z $2 7077; do
    sleep 5;
  done;
    echo "Sourcing Cluster Server Dependencies..."
    ln -s /usr/src/app/packages/node_modules /usr/src/app/node_modules 
    source /usr/src/app/packages/python-packages/bin/activate 
    node server.js
else
  echo "Invalid command '${1}'" >&2
  exit 1
fi