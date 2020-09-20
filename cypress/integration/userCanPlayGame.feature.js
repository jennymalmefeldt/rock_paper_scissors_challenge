describe('user can '), () => {
  beforeEach(() =>
    it('displays the content of Rock'), () =>
      cy.visit('/');
      cy.get('button#rock').click();
      cy.get('#message').should('contain', 'You win!');
)};
