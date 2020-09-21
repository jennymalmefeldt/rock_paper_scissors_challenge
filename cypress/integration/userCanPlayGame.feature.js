describe('user can', () => {
  it('play game', () => {
    cy.visit("/");
    cy.get('button#rock').click();
    cy.get('#message').should('contain', 'You win');
  });