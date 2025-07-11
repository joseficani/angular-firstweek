// /// <reference types="cypress" />

// describe('Task List Rendering', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:4200/tasks');
//   });

//   it('Shows initial task list', () => {
//     cy.get('.task-item-row').should('have.length.greaterThan', 0);
//   });

//   it('Adds a new task and shows it in the list', () => {
//     cy.get('input[placeholder="Enter a task"]').type('New Cypress Task');
//     cy.get('button').contains('Add').click();
//     cy.contains('New Cypress Task');
//   });
// });
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

  it('Shows empty list when all tasks are deleted', () => {
    // Delete all tasks one by one
    cy.get('.task-item-row').then(($tasks) => {
      const taskCount = $tasks.length;
      for (let i = 0; i < taskCount; i++) {
        cy.get('.task-item-row')
          .first()
          .within(() => {
            cy.get('button').contains('Delete').click();
          });
        // Confirm modal
        cy.get('.modal').within(() => {
          cy.contains('Continue').click();
        });
      }
    });

    // After deleting all tasks, check for empty message
    cy.contains('No tasks found').should('exist');
  });
});
