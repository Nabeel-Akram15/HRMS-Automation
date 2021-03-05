/// <reference types="Cypress" />
import SignInDetail from '../Pages/SignInDetail'

let email
let password
before(() => {
  cy.visit(Cypress.env('Login'))
  cy.fixture('ValidCardential.json').then((element) => {
    console.log(element)
    email = element.email
    password = element.password
  })
})

describe('Sign In Testing', function () {
  const signinpage = new SignInDetail()
  it('Login with Valid Cardential', function () {
    signinpage.emailInput().type(email)

    signinpage.passwordInput().type(password)

    signinpage.signInButton().click()

    cy.url().should('eq', Cypress.env('Dashboard'))
  })

  it('Login with Invalid Email', function () {
    cy.fixture('InvalidEmail.json').as('Fixture file')

    cy.get('@Fixture file').each(function (location) {
      const firsts = Object.values(location)

      firsts.forEach((value) => {
        const second = Object.values(firsts)

        signinpage.emailInput().type(second[0])

        signinpage.passwordInput().type(second[1])

        signinpage.signInButton().click()

        signinpage.invalidEmailOrPasswordError().then(($error) => {
          expect($error.text()).to.eq('Invalid login credentials. Please try again.')
        })
      })
    })
  })

  it('Login with Invalid Password', function () {
    cy.fixture('InvalidPassowrd.json').as('Invalid Password')

    cy.get('@Invalid Password').each(function (location) {
      const FirstJsonElement = Object.values(location)

      FirstJsonElement.forEach((value) => {
        signinpage.emailInput().type(FirstJsonElement[0])

        signinpage.passwordInput().type(FirstJsonElement[1])

        signinpage.signInButton().click()

        signinpage.invalidEmailOrPasswordError().then(($error) => {
          expect($error.text()).to.eq('Invalid login credentials. Please try again.')
        })
      })
    })
  })

  it('Password Change Through Forgot Password', function () {
    signinpage.forgotPassword().click()

    cy.url().should('eq', Cypress.env('ForgotPassword'))

    signinpage.signInButton().should('contain.text', 'Send Reset Password Email')

    signinpage.emailOnResetPassword().type(email)

    signinpage.signInButton().click()

    signinpage.signInButton().should('contain', 'Proceed to Login')

    cy.visit(Cypress.env('Mailer'))

    cy.wait(500)

    cy.get('.refresh').click()

    cy.get('.active > :nth-child(1) > a').then(($Content) => {
      cy.visit(Cypress.env('Mailer') + '/' + $Content.get(0).innerText + '/rich')
    })
    cy.get('iframe').then(function ($iframeContent) {
      const ResetPassword = $iframeContent.contents().find('body.respond:nth-child(2) table.bg_color:nth-child(3) table.container590 table:nth-child(1) tbody:nth-child(1) tr:nth-child(2) td:nth-child(1) > div:nth-child(1)')
      cy.wrap(ResetPassword).then($href => {
        cy.get($href).children().should('have.attr', 'href').then((URL) => {
          cy.visit(URL)
        })
      })
    })

    signinpage.newPassword().type(password)

    signinpage.confirmPassword().type(password)

    signinpage.signInButton().click()

    cy.url().should('eq', Cypress.env('Login'))
  })
})
// cy.get('div').should(($div) => {
//   // access the native DOM element
//   expect($div.get(0).innerText).to.eq('foobarbaz')
// })
