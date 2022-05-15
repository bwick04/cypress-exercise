#build the docker image
docker build -t cypress-test:1.0.0 .
#start the container in interactive mode to run the tests
docker container run -it cypress-test:1.0.0 /bin/bash