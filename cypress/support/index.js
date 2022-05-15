// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import "./commands";

// // /cypres/support/index.js
// Cypress.on("window:before:load", (win) => {
//   cy.stub(win.console, "error").callsFake((msg) => {
//     // log out to the terminal
//     cy.now("task", "error", msg);
//     // log to Command Log and fail the test
//     throw new Error(msg);
//   });
// });
