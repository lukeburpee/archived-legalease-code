#!/bin/sh

docker build -t burpee/alpine:v3.5.1 --file zAlpine.dkr .
docker build -t burpee/busybox --file zBusybox.dkr .
docker build -t burpee/mongo --file zMongo.dkr .
docker build -t burpee/openjdk8-alpine --file zOpenjdk8-alpine.dkr .
docker build -t burpee/ubuntu:zesty --file zUbuntu.dkr .