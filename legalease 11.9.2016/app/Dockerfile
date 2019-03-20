FROM tzapu/development-meteor
RUN apt-get install -y sudo && \
	adduser user && \
	echo "user ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/user && \
	chmod 0440 /etc/sudoers.d/user 
WORKDIR /opt/app/
ADD . /opt/app/
RUN meteor npm install
CMD ["su", "user", "-c", "meteor --settings settings.json"]