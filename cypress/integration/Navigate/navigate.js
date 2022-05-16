import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

When(`I navigate to {string}`, (link) => {
  cy.intercept(`**${link}`).as("getPage");
  cy.visit(link, {
    failOnStatusCode: false,
    onBeforeLoad(win) {
      cy.spy(win.console, "error").as("consoleError");
    },
  });
});

Then("There are no console errors", () => {
  cy.get("@consoleError").should("not.be.called");
});

And(`The page returns a status code of {}`, (status) => {
  cy.wait("@getPage").then((response) => {
    expect(response.response.statusCode).to.eq(parseInt(status));
  });
});

And("All linked pages are live", () => {
  cy.get("a[href]").each((element) => {
    const hrefLink = element[0].href;

    if (
      hrefLink &&
      // Exclude the mailto link that launches system mail application
      !hrefLink.includes("mailto") &&
      // Exclude the link that takes you to the current page since
      // we are already verifying this.
      !hrefLink.includes("#w3c_content_body")
    ) {
      cy.request(hrefLink).then((response) => {
        expect(response.status).not.to.be.within(400, 499);
      });
    }
  });
});
