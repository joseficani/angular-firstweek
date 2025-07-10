/// <reference types="cypress" />

describe('Task List Rendering', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/tasks');
  });

  it('Shows initial task list', () => {
    cy.get('.task-item-row').should('have.length.greaterThan', 0);
  });

  it('Adds a new task and shows it in the list', () => {
    cy.get('input[placeholder="Enter a task"]').type('New Cypress Task');
    cy.get('button').contains('Add').click();
    cy.contains('New Cypress Task');
  });
});
