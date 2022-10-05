describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4000/todos')

    cy.get('input').type('ABC{enter}');
    cy.get('body').should('contains.text', 'ABC')
  })
})
