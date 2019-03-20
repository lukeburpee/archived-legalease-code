FROM deredy/react-native

COPY . /app

WORKDIR /app

RUN npm install --production \
    && npm cache clean

ADD ./wait-for-it.sh /
RUN chmod +x /wait-for-it.sh

CMD ["/wait-for-it.sh", "-t", "5000", "app:3000", "--", "react-native", "run-android"]