describe("User can choose a weapon", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('User choose rock', () => {
    cy.get('button#rock').click();
    cy.get('#message').should('contain', 'Choose you weapon: you picked rock')
  });

  it('User choose paper', () => {
    cy.get('button#paper').click();
    cy.get('#message').should('contain', 'Choose you weapon: you picked paper')
  })

  it('User choose scissor', () => {
    cy.get('button#scissor').click();
    cy.get('#message').should('contain', 'Choose you weapon: you picked scissor')
  })

  it('User display result', () => {
    cy.get('button#play-game').should('contain', 'Play Game!')
    cy.get('#message').should('contain', "")
  })
});
