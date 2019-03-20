#!/bin/bash

set -e
echo -e "\033[1m Starting ReplicaSet configuration"

chmod +x /wait-for-it.sh &&

echo 'checking Mongo Replica Members...'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 mongo1:27017 -- echo 'Mongo1 OK'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 mongo2:27017 -- echo 'Mongo2 OK'
/docker-entrypoint-initnuxeo.d/init/wait-for-it.sh -t 200 mongo3:27017 -- echo 'Mongo3 OK'
echo 'Mongo Replica Members OK'

id=1
members=()
IFS=',' read -ra hosts <<< "${PRIMARY_MEMBER},${SECONDARY_MEMBERS}"
for host in "${hosts[@]}"; do
    members+=("{_id:${id},host:'${host}'}")
    ((id++))
done

members_js=`echo $(IFS=,; echo "${members[*]}")`
js="rs.initiate({_id:'${REPLICA_SET_ID}',members:[${members_js}]});"
mongo "${PRIMARY_MEMBER}/${DATABASE}" --eval "${js}"

echo -e "\033[1m Mongo is configured - stopping setup container"
