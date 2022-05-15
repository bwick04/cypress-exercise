FROM cypress/browsers:node14.17.6-chrome100-ff98
RUN mkdir /cypress-project
WORKDIR /cypress-project
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
RUN npm install