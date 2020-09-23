describe("User can choose a weapon", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('User choose rock', () => {
    cy.get('button#rock').click();
    cy.get('#message').should('contain', 'Rock')
  });

  it('User choose paper', () => {
    cy.get('button#paper').click();
    cy.get('message').should('contain', 'Paper')
  })

  it('User choose scissor', () => {
    cy.get('button#scissor').click();
    cy.get('message').should('contain', 'Scissor')
  })
});
