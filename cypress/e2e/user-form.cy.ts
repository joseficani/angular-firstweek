/// <reference types="cypress" />

describe('User Form Validation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('Shows required field errors when fields are touched but empty', () => {
    // Touch each field to trigger validation
    cy.get('input[formcontrolname="fullName"]').focus().blur();
    cy.get('input[formcontrolname="email"]').focus().blur();
    cy.get('input[formcontrolname="age"]').focus().blur();
    cy.get('input[formcontrolname="password"]').focus().blur();
    cy.get('input[formcontrolname="confirmPassword"]').focus().blur();

    // Check validation messages
    cy.contains('Full Name is required');
    cy.contains('Valid Email is required');
    cy.contains('Age must be between 18 and 100');
    cy.contains('Password is required and must be 6–20 characters');
  });

  it('Shows password length error', () => {
    cy.get('input[formcontrolname="password"]').type('123');
    cy.get('input[formcontrolname="confirmPassword"]').type('123');

    // Touch the other fields to trigger validation
    cy.get('input[formcontrolname="fullName"]').focus().blur();
    cy.get('input[formcontrolname="email"]').focus().blur();
    cy.get('input[formcontrolname="age"]').focus().blur();

    // Check only password length error
    cy.contains('Password is required and must be 6–20 characters');
  });

  it('Shows password mismatch error', () => {
    cy.get('input[formcontrolname="fullName"]').type('Jose Ficani');
    cy.get('input[formcontrolname="email"]').type('jose@gmail.com');
    cy.get('input[formcontrolname="age"]').type('30');
    cy.get('input[formcontrolname="password"]').type('validPassword');
    cy.get('input[formcontrolname="confirmPassword"]').type('differentPassword');

    // Blur to trigger validation
    cy.get('input[formcontrolname="confirmPassword"]').blur();

    // Check mismatch error
    cy.contains('Passwords must match');
  });

  it('Redirects to task list after valid submission', () => {
    cy.get('input[formcontrolname="fullName"]').type('Jose Ficani');
    cy.get('input[formcontrolname="email"]').type('jose@gmail.com');
    cy.get('input[formcontrolname="age"]').type('30');
    cy.get('input[formcontrolname="password"]').type('secret123');
    cy.get('input[formcontrolname="confirmPassword"]').type('secret123');

    // Submit form
    cy.get('button[type="submit"]').click();

    // Wait for success message & redirect
    cy.wait(2500);
    cy.url().should('include', '/tasks');
  });
});
