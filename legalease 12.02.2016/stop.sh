#!/bin/bash

docker-compose down

docker volume rm $(docker volume ls -qf dangling=true)