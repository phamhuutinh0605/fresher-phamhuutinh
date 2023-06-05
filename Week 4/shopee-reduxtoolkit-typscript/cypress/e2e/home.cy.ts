describe('home spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
  it.only('the list item should be render',()=>{
    cy.visit('http://localhost:3000/')
    cy.get('.item__card').eq(0).contains("title 126 - There are many variations of passages of Lorem Ipsum available")
  })
})