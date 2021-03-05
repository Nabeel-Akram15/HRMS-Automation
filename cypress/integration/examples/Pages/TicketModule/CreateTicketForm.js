class CeateTicketForm {
  toFieldDiv () {
    return cy.get('#tickets-ticketForm-ticketAssignee input')
  }

  toFieldInput () {
    return cy.xpath('//*[@id="react-select-2--value"]/div[2]/input')
  }

  toFieldAfterEnteringText () {
    return cy.xpath('//*[@id="react-select-2--option-0"]')
  }

  toDivePlaceHolder () {
    return cy.xpath('//*[@id="react-select-2--value"]/div[1]')
  }

  ccDiv () {
    return cy.get('.cc-div')
  }

  ccFieldInput () {
    return cy.xpath('//*[@id="react-select-3--value"]/div[2]/input')
  }

  ccFieldAfterEnteringText () {
    return cy.xpath('//*[@id="react-select-3--option-0"]')
  }

  ccDivePlaceHolder () {
    return cy.get('#react-select-3--value > .Select-placeholder')
  }

  categoryDiv () {
    return cy.get('.categories-div')
  }

  categoryFieldInput () {
    return cy.xpath('//*[@id="react-select-5--value"]/div[2]/input')
  }

  categoryFieldAfterEnteringText () {
    return cy.xpath('//*[@id="react-select-5--option-0"]')
  }

  categoryDivePlaceHolder () {
    return cy.xpath('//*[@id="react-select-5--value"]/div[1]')
  }

  priorityDiv () {
    return cy.get('.priority-date')
  }

  priorityFieldInput () {
    return cy.xpath('//*[@id="react-select-4--value"]/div[2]/input')
  }

  priorityFieldAfterEnteringText () {
    return cy.xpath('//*[@id="react-select-4--option-0"]')
  }

  priorityDivePlaceHolder () {
    return cy.xpath('//*[@id="react-select-4--value"]/div[1]')
  }

  title () {
    return cy.get('#tickets.ticketForm.title')
  }

  description () {
    return cy.xpath('#tickets-ticketForm-description')
  }

  submit () {
    return cy.xpath('//button[contains(text(),"Send Ticket")]')
  }

  cancel () {
    return cy.xpath('//button[contains(text(),"Cancel")]')
  }

  assigneError () {
    return cy.xpath('//*[@id="tickets-ticketForm-ticketAssignee"]/div[2]')
  }

  titleError () {
    // eslint-disable-next-line quotes
    return cy.get(`.subject-div >div >small`)
  }

  descriptionError () {
    // eslint-disable-next-line quotes
    return cy.get(`.description-field >div >small`)
  }

  categoryError () {
    return cy.xpath('//div[contains(text(),"Category is required")]')
  }

  priorityError () {
    return cy.xpath('//div[contains(text(),"Please specify priority")]')
  }
}
export default CeateTicketForm
