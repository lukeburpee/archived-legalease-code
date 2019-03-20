FROM ubuntu
MAINTAINER legalease.software@gmail.com

RUN apt-get update && apt-get install -y \
 wget \
 default-jdk \
 python2.7 \
 sudo \
 scala \
 readpst \
 libpst4 \
 python-dateutil \
 python-chardet \
 nodejs \
 npm \
 && cd /home \
 && mkdir spark \
 && cd spark \
 && wget http://ftp.unicamp.br/pub/apache/spark/spark-1.6.2/spark-1.6.2-bin-hadoop2.6.tgz \
 && tar -xvf spark-1.6.2-bin-hadoop2.6.tgz 

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk-amd64
ENV SPARK_HOME /home/spark/spark-1.6.2-bin-hadoop2.6
ENV PYSPARK_PYTHON python2.7
ENV PATH $PATH:$SPARK_HOME/bin
ENV NODE_VERSION v5.8.0

COPY package.json /usr/src/app/
RUN sudo npm install --production \
    && npm cache clean
COPY . /usr/src/app/

# Ports
EXPOSE 6000

CMD nodejs server.js
