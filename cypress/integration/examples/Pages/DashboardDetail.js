class DashboardDetail {
  welcomeWidget () {
    return cy.get('.welcome')
  }

  profileImage () {
    return cy.get('.profile-image-click')
  }

  outOfOfficeWidget () {
    return cy.get('.leave-widget')
  }

  outOfOfficeEmptyIndicator () {
    return cy.get('.error-msg')
  }

  newArrivalWidget () {
    return cy.get('.new-arrival-widget')
  }

  newArrivalEmptyIndicator () {
    return cy.get('.error-message')
  }

  leaveWidget () {
    return cy.get('.pending-leaves')
  }

  ticketWidget () {
    return cy.get('.inbox-tickets')
  }

  expenseWidget () {
    return cy.get('.pending-expenses')
  }

  dnarWidget () {
    return cy.get('.pending-dnar-transactions')
  }

  upcomingPublicHolidayWidget () {
    return cy.get('.holiday-widget-main-div')
  }

  leaveWidgetText () {
    return cy.get('#dashboard-active-assigned-tickets-text')
  }

  ticketWidgetText () {
    return cy.get('#dashboard-active-assigned-tickets-text')
  }

  dnarWidgetText () {
    return cy.get('#dashboard-pending-dnars-approvals-text')
  }

  upcomingHoliday () {
    return cy.get('.holiday-record')
  }

  setting () {
    return cy.get('#menu-list > ul li:nth-child(2)')
  }

  logout () {
    return cy.get('#menu-list > ul li:nth-child(3)')
  }
}
export default DashboardDetail
