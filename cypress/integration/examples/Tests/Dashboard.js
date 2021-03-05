import DashboardDetail from '../Pages/DashboardDetail'
import ExpenseDetail from '../Pages/ExpenseDetail'
const expense = new ExpenseDetail()
const dashboardpage = new DashboardDetail()
const dateFormat = /(\b\d{1,2}\D{0,3})?\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(?:Nov|Dec)(?:ember)?)\D?(\d{1,2}\D?)?\D?((19[7-9]\d|20\d{2})|\d{2})/g

before(() => {
  cy.Login()
})

beforeEach(() => {
  cy.restoreLocalStorage()
})

afterEach(() => {
  cy.saveLocalStorage()
  cy.visit(Cypress.env('Dashboard'))
})

describe('Dashboard Test Suit', function () {
  it('Dashboard New Arrival Widget', function () {
    dashboardpage.newArrivalWidget().should('be.visible')
  })

  it('Welcome', function () {
    dashboardpage.welcomeWidget().should('be.visible')
      .children().should('have.class', 'avatar sb-avatar sb-avatar--src')
      .children().should('have.attr', 'src')
    dashboardpage.welcomeWidget().children().eq(1).should('include.text', 'Welcome')
  })

  it('New Arrival', function () {
    dashboardpage.newArrivalWidget().then((newArrival) => {
      if (newArrival.find('.error-msg').is(':visible')) {
        cy.get(newArrival).find('.error-msg').children().should('have.text', 'No new user in last 7 dayss')
      } else {
        dashboardpage.newArrivalWidget().find('[id="scrollbar-style"]')
          .should('have.css', 'overflow-x', 'auto')
          .and('have.css', 'max-height', '300px')
          .within((insideScrollerDiv) => {
            cy.get(insideScrollerDiv).children().then((newArrivalRow) => {
              for (let index = 1; index < newArrivalRow.length; index++) {
                cy.get(newArrivalRow[index]).within((insideRow) => {
                  cy.get('.link-style').should('have.attr', 'href').then((href) => {
                    expect(href).contain('/people/')
                  })
                  cy.get(insideRow).children().within((linkInside) => {
                    cy.get(linkInside).children().eq(0).children()
                      .children().should('have.class', 'sb-avatar__image')
                      .and('have.css', 'width', '40px')
                      .and('have.css', 'height', '40px')
                    cy.get(linkInside).children().eq(1).children()
                      .eq(1).invoke('text').then((dateDiv) => {
                        const Date = dateDiv.split('on')
                        if (Date[1] === undefined) {
                          expect(Date[0]).to.be.oneOf(['joined today', ''])
                        } else {
                          console.log('Dates are' + Date[1].trim())
                          expect(Date[1].trim()).to.match(dateFormat)
                        }
                      })
                  })
                })
              }
            })
          })
      }
    })
  })

  it('View and open pending LeaveApprovals', function () {
    dashboardpage.leaveWidget().children().should('have.class', 'pointer')
      .children().eq(0).should('have.attr', 'src')
    dashboardpage.leaveWidgetText().should('be.visible')
    dashboardpage.leaveWidget().click()
    cy.url().should('eq', Cypress.env('Leaves'))
  })

  it('Active Assigned Tickets', function () {
    dashboardpage.ticketWidget().children().should('have.class', 'pointer')
      .children().eq(0).should('have.attr', 'src')
    dashboardpage.ticketWidgetText().should('be.visible')
    dashboardpage.ticketWidget().click()
    cy.url().should('eq', Cypress.env('Ticket'))
  })

  it('Pending Expense Approvals', function () {
    dashboardpage.expenseWidget().children().should('have.class', 'pointer')
      .children().eq(0).should('have.attr', 'src')
    dashboardpage.expenseWidget().click()
    cy.url().should('eq', Cypress.env('Expense'))
    expense.expenseApprovalTab().should('be.visible')
  })

  it('Upcoming Public Holiday', function () {
    dashboardpage.upcomingPublicHolidayWidget().should('be.visible')
  })

  it('profile icon is visible', function () {
    dashboardpage.profileImage().should('be.visible')
  })

  it('Out of office widget', function () {
    dashboardpage.outOfOfficeWidget().then((outOfOffice) => {
      if (outOfOffice.find('.error-msg').is(':visible')) {
        cy.get(outOfOffice).find('.error-msg').children().should('have.text', 'No one is on leave')
      } else {
        dashboardpage.outOfOfficeWidget().find('[id="scrollbar-style"]')
          .should('have.css', 'overflow-x', 'auto')
          .and('have.css', 'max-height', '300px')
          .within((insideScrollerDiv) => {
            cy.get(insideScrollerDiv).children().then((outOfOfficeRow) => {
              for (let index = 0; index < outOfOfficeRow.length; index++) {
                cy.get(outOfOfficeRow[index]).within((insideRow) => {
                  cy.get('.link-style').should('have.attr', 'href').then((href) => {
                    expect(href).contain('/people/')
                  })
                  cy.get(insideRow).children().within((linkInside) => {
                    cy.get(linkInside).children().eq(0).children()
                      .children().should('have.class', 'sb-avatar__image')
                      .and('have.css', 'width', '40px')
                      .and('have.css', 'height', '40px')
                    cy.get(linkInside).children().eq(1).children()
                      .eq(1).invoke('text').then((dateDiv) => {
                        const Date = dateDiv.split('on')
                        if (Date[1] === undefined) {
                          expect(Date[0]).to.be.oneOf(['will be back tomorrow', ''])
                        } else {
                          console.log('Dates are' + Date[1].trim())
                          expect(Date[1].trim()).to.match(dateFormat)
                        }
                      })
                  })
                })
              }
            })
          })
      }
    })
  })
})
