# cypress-exercise

## Pre-requisites

- Install docker:
  - Mac: https://docs.docker.com/desktop/mac/install/
  - Windows: https://docs.docker.com/desktop/windows/install/

## Install

```
npm install
```

## Running tests in docker container

1. Make sure you have docker installed on your machine and running.
2. Run the `start.sh` script to create the docker image from the dockerfile. This will run the container in interactive mode with the specified cypress image in the dockerfile. From here, you can run different commands to run tests in the container itself.

```
bash start.sh
```

3. Run the tests in the docker container.

```
npm run chrome:test
```

```
npm run firefox:test
```
