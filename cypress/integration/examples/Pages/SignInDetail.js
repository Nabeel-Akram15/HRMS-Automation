export class SignInModule {
  emailInput () {
    return cy.get('#sign-in-form-email-input')
  }

  passwordInput () {
    return cy.get('#sign-in-form-password-input')
  }

  signInButton () {
    return cy.get('.landing-page-button')
  }

  forgotPassword () {
    return cy.get('.landing-page-link')
  }

  invalidEmailOrPasswordError () {
    return cy.get('.landing-page-error-div')
  }

  emailOnResetPassword () {
    return cy.get('.landing-page-form-field')
  }

  newPassword () {
    return cy.get('#password-form-password-input')
  }

  confirmPassword () {
    return cy.get('#password-form-password-confirmation-input')
  }
}

export default SignInModule
