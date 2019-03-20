FROM node:4.6.2-slim
MAINTAINER legaleasesoftware@gmail.com

FROM beevelop/nodejs-python
RUN mkdir /msg-extractor
COPY . /msg-extractor/
WORKDIR /msg-extractor
RUN python -m pip install -r ./requirements.txt \
	&& python setup.py install

ENTRYPOINT ['python', 'ExtractMsg.py', '--json']
