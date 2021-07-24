/// <reference types="Cypress" />
import locators from '../Pages./Locators'

before(() => {

  cy.visit(Cypress.env('Base'))
})

afterEach(()=> {
})


describe('Test Cases Suite', function () {

  const locator = new locators()

  it('Test 2 – checkMapSocialMediaIcons', function () {

    locator.mapOverview().click({force:true})

    locator.firstSocialIcon().should('have.attr','href','https://www.facebook.com/')
    .and('have.attr','title','FacebookDeskEN')
    .and('have.attr','target','_blank')
    .children().should('have.attr','data-icon','facebook-f')
    })

    it('Test 3 – checkMapDefaultViews', function () {
      cy.title().should('eq','01-TestViewEN')
      locator.mapOverview().click({force:true})
      locator.logo().children().should('have.attr','href','http://kubra.com')
      .and('have.attr','target','_blank')
      .children().should('have.attr','alt','Header Logo')
      locator.menuenLabel().first().should('have.text','MenuEN')

      })

})

