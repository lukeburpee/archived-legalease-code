#!/bin/sh

docker build -t burpee/alpine:v3.5.1 --file .alpine.dkr .
docker build -t burpee/busybox --file .busybox.dkr .
docker build -t burpee/openjdk8-alpine --file .openjdk8-alpine.dkr .
docker build -t burpee/ubuntu:zesty --file .ubuntu.dkr .