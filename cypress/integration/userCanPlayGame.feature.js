describe("User can choose a weapon", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('button#play-game').should('contain', 'Play Game!')
  });

  it('User choose rock', () => {
    cy.get('button#rock').click();
    cy.get('#message').should('contain', 'Choose you weapon!: You picked rock')
  });

  it('User choose paper', () => {
    cy.get('button#paper').click();
    cy.get('#message').should('contain', 'Choose you weapon!: You picked paper')
  })

  it('User choose scissor', () => {
    cy.get('button#scissor').click();
    cy.get('#message').should('contain', 'Choose you weapon!: You picked scissor')
  })
});
