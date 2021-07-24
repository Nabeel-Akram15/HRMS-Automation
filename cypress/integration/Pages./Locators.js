export class Locators {

  mapOverview(){
    return cy.get('[title="Map Overview"]')
  }

  firstSocialIcon(){
    return cy.get('.social-links a:nth-child(1)')
  }

  logo() {
    return cy.get('.logo')
  }

  menuenLabel()
  {
    return cy.get('.tabs .label')
    }
}
export default Locators