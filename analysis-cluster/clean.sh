docker rm $(docker ps -a -f status=exited -q)
docker rmi $(docker images -q -f dangling=true)
docker volume rm $(docker volume ls -f dangling=true -q)