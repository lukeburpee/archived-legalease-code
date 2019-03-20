FROM node:4.2

MAINTAINER legalease.software@gmail.com

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --production \
    && npm cache clean
COPY . /usr/src/app/

COPY ./wait-for-it.sh /
COPY ./docker-entrypoint.sh /
RUN chmod +x /wait-for-it.sh
RUN chmod +x /docker-entrypoint.sh

CMD ["/docker-entrypoint.sh"]
