# archived-legalease-code

Repo of personal projects that I've worked on in the past. Haven't used any of these in a long time and not sure if they all work. Some are partial forks of other projects, particularly the email extraction/analysis code, which was forked from Sotera Defense Newman repo. The main difference between the code in that repo and the email analysis/extraction code in this repo, is that all machine learning packages have been compiled into a single alpine docker file, with a custom compiled python within a python virtual environment for portability. Other micro service images would then source the virtual environment python to allow the microservices to access the machine learning libraries without having to include the machine learning code within the micro service image itself. Rather than creating containers each time an email analysis task was needed, these where ran as long running microservices, each with their own server.

Additionally, the email extraction/analysis code uses custom spark code to interact directly with mongodb/gridfs, rather than interacting with the file system. This increased the speed of the original repo (at least at the time. haven't looked at the newman package in a while so things might have changed). Either way, now that docker allow multistage builds, the dockerfile for compiling the machine learning code is overly complex and probably doesn't work without a little fine tuning.

Some of these packages are missing dependencies due to the size of the dependency or licensing issues with the dependency:
- Analysis Cluster
	- missing ner_models in static data folder (I still have all of these, but couldn't include them in the github repo because they're each over 100 mb):
		- english
		- spanish
		- german
		- russian
		- ukrainian
- legalease
	- open office
	- dejavue oneview (dabbled with this document viewer early on, but ended up moving away from it)
	- hadoop (easily download from other location)

This package repo also contains c headers that allow you to compile libpst in docker alpine.
