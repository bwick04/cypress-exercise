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
2. Clone the repository to your local machine.
3. Navigate to the root directory of the project `cd cypress-exercise`
5. Run the `start.sh` script. If you make any updates to test scripts you will have to run this script again.

```
bash start.sh
```

This will create the docker image and run the container that will execute the test on both chrome and firefox.

## Reporting

After running the tests you will see two reports that were generated:

Results from the chrome test will be saved here:

`./cypress/reports/chrome-reports`

Results from the firefox test will be saved here:

`./cypress/reports/firefox-reports`

open the `.html` file in each of the folders with your favorite browser to see the results from the run.

## Docker command cheatsheat:

### Generate the image

```
docker build -t cypress-exercise:1.0.0 .
```

### Run both the chrome and firefox tests

```
docker-compose up
```

### Run the chrome test individually
```
docker-compose run chrome
```

### Run the firefox test individually
```
docker-compose run firefox
```

### Run the container in interactive mode to run tests individually

```
docker container run -it cypress-exercise:1.0.0 /bin/bash
```
