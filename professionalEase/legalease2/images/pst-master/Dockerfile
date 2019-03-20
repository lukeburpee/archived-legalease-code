FROM singularities/spark
MAINTAINER legalease.software@gmail.com

RUN apt-get update && apt-get install -y \
 sudo \
 readpst \
 libpst4 \
 python-dateutil \
 python-chardet \
 nodejs \
 npm 

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN sudo npm install --production \
    && npm cache clean
COPY . /usr/src/app/

# Ports
EXPOSE 6000 6066 7070 8080 50070

CMD nodejs server.js
