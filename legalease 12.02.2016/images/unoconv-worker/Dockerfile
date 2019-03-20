FROM node:4.2

MAINTAINER legalease.software@gmail.com

WORKDIR /tmp

RUN apt-get update
RUN apt-get -y install unoconv
RUN apt-get install -y libqt5widgets5
RUN apt-get install -y libxcb-keysyms1-dev
RUN apt-get install -y libxcb-image0-dev
RUN apt-get install -y libxcb-shm0-dev
RUN apt-get install -y libxcb-icccm4-dev
RUN apt-get install -y libxcb-sync0-dev
RUN apt-get install -y libxcb-xfixes0-dev
RUN apt-get install -y libxcb-shape0-dev
RUN apt-get install -y libxcb-randr0-dev
RUN apt-get install -y libxcb-render-util0-dev
RUN apt-get install -y libfontconfig1-dev
RUN apt-get install -y libfreetype6-dev
RUN apt-get install -y libx11-dev
RUN apt-get install -y libxext-dev
RUN apt-get install -y libxfixes-dev
RUN apt-get install -y libxi-dev
RUN apt-get install -y libxrender-dev
RUN apt-get install -y libxcb1-dev
RUN apt-get install -y libx11-xcb-dev
RUN apt-get install -y libxcb-glx0-dev
RUN apt-get install -y x11vnc
RUN apt-get install -y xauth
RUN apt-get install -y build-essential
RUN apt-get install -y mesa-common-dev
RUN apt-get install -y libglu1-mesa-dev
RUN apt-get install -y libxkbcommon-dev
RUN apt-get install -y libxcb-xkb-dev
RUN apt-get install -y libxslt1-dev
RUN apt-get install -y libgstreamer-plugins-base0.10-dev
RUN apt-get install -y xvfb

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY qcad-3.12.8-linux-x86_64.tar.gz /usr/src/app/
RUN tar zxvf qcad-3.12.8-linux-x86_64.tar.gz

COPY package.json /usr/src/app/
RUN npm install --production \
    && npm cache clean
COPY . /usr/src/app/

EXPOSE 3121

CMD node server.js
