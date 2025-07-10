/// <reference types="cypress" />

describe('User Form Validation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('Shows required errors when submitting empty form', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Full Name is required');
    cy.contains('Valid Email is required');
    cy.contains('Age must be between 18 and 100');
    cy.contains('Password is required and must be 6–20 characters');
    cy.contains('Passwords must match');
  });

  it('Shows password length errors', () => {
    cy.get('input[formcontrolname="password"]').type('123');
    cy.get('input[formcontrolname="confirmPassword"]').type('123');
    cy.get('button[type="submit"]').click();
    cy.contains('Password is required and must be 6–20 characters');
  });

  it('Redirects to task list after valid submission', () => {
  cy.get('input[formcontrolname="fullName"]').type('Jose ficani');
  cy.get('input[formcontrolname="email"]').type('jose@gmail.com');
  cy.get('input[formcontrolname="age"]').type('30');
  cy.get('input[formcontrolname="password"]').type('secret123');
  cy.get('input[formcontrolname="confirmPassword"]').type('secret123');
  cy.get('button[type="submit"]').click();

  cy.wait(2500); 
  cy.url().should('include', '/tasks');
});

});
