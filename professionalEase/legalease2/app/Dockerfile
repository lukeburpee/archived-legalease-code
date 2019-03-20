FROM tzapu/development-meteor:1.4.2.3
RUN apt-get install -y sudo && \
	adduser user && \
	echo "user ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/user && \
	chmod 0440 /etc/sudoers.d/user 
WORKDIR /opt/app/
ADD . /opt/app/

CMD ["su", "user", "-c", "meteor --settings settings.json"]