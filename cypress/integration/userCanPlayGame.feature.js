describe("User can choose a weapon", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "floor").returns(0)
      }
    })
  });

  describe('User tab and it', () => {
    beforeEach(() => {
      // cy.get('button#play-game').click();
    })
  });

  it('User choose rock', () => {
    cy.get('button#rock').click();
    cy.get('button#play-game').click();
    cy.get('#player-choice-message').should('contain', 'Choose you weapon! You picked: rock')
    cy.get('#computer-choice-message').should('contain', 'Computer picked: rock')
    cy.get('#result-message').should("contain", "IT'S A TIE!")
  });

  it('User choose paper', () => {
    cy.get('button#paper').click();
    cy.get('button#play-game').click();
    cy.get('#player-choice-message').should('contain', 'Choose you weapon! You picked: paper')
    cy.get('#computer-choice-message').should('contain', 'Computer picked: rock')
    cy.get('#result-message').should("contain", "YOU WIN!")
  })

  it('User choose scissor', () => {
    cy.get('button#scissor').click();
    cy.get('button#play-game').click();
    cy.get('#player-choice-message').should('contain', 'Choose you weapon! You picked: scissor')
    cy.get('#computer-choice-message').should('contain', 'Computer picked: rock')
    cy.get('#result-message').should("contain", "YOUR OPPONENT WINS!")

  })
});
