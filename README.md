# cypress-exercise

## Pre-requisites

- Install docker:
  - Mac: https://docs.docker.com/desktop/mac/install/
  - Windows: https://docs.docker.com/desktop/windows/install/

## Install

```
npm install
```

## Running the tests for the first time:

1. Make sure you have docker installed on your machine and running.
2. Run the `start.sh` script. If you make any updates to test scripts you will have to run this script again.

```
bash start.sh
```

This will create the docker image and run the container that will execute the test on both chrome and firefox.

## Docker commands:

### Generate the image

```
docker build -t cypress-exercise:1.0.0 .
```

### Run both the chrome and firefox tests

```
docker-compose up
```

### Run the container in interactive mode to run tests individually

```
docker container run -it cypress-exercise:1.0.0 /bin/bash
```

## Reporting

After running the tests you will see two reports that were generated:

Results from the chrome test will be saved here:

`./cypress/reports/chrome-reports`

Results from the firefox test will be saved here:

`./cypress/reports/firefox-reports`

open the `.html` with your favorite browser to see the results from the run.
