/// <reference types="cypress" />

describe('Angular App Basic Tests', () => {
  it('Loads the main page', () => {
    cy.visit('http://localhost:4200'); 
    cy.contains('My First Angular App');
  });

  it('Clicks a button and checks result', () => {
    cy.visit('http://localhost:4200');
    cy.get('button').contains('Click Me').click();
    cy.contains('You clicked the button!');
  });
});
