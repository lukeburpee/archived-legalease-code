#!/bin/sh

cd base-images

./build-base-images.sh

cd ..

docker-compose build