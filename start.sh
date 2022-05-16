#build the docker image
docker build -t cypress-exercise:1.0.0 .
#start the container and run both tests in chrome and firefox
docker-compose up