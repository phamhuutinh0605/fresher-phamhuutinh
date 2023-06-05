describe('login should render', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })
  it('the login form should be render', () => {
    cy.get('.register__form')
    cy.get('.register__form > h4').contains('Đăng nhập')
    cy.get('input')
  })
  it('allow users inform', () => {
    cy.getByData('.register__email > input').type("huutinh@gmail.com")
    cy.getByData('.register__password  > input').type("12345")
    cy.getByData('.search__button').click()
  })
  it('not allow users inform', () => {
    cy.getByData('.register__email > input').type("huutinh@gmail.com")
    cy.getByData('.register__password  > input').type("12345")
    cy.getByData('.search__button').click()
  })
})