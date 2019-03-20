FROM fluxs/unoconv-worker-base

MAINTAINER legalease.software@gmail.com

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --production \
    && npm cache clean
COPY . /usr/src/app/

COPY ./wait-for-it.sh /

RUN chmod +x /wait-for-it.sh

EXPOSE 3600

CMD ["/wait-for-it.sh", "-t", "10000", "app:3000", "--", "node", "server.js"]
