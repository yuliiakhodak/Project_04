const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
const DynamicTables = require("../../pages/DynamicTables");
const dynamicTables = new DynamicTables()


Given(/^user navigates to "([^"]*)"$/, (url) => {
	cy.visit(url)
})

Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.url().should("eq", url)
})

Then(/^the user should see the "([^"]*)" heading$/, (text) => {
	dynamicTables.getInventortyText().should("have.text", text)
})

Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const headers = dataTable.rawTable.flat()
	dynamicTables.getHeaders().each(($el, index) => {
		cy.wrap($el).should("have.text", headers[index])
	})

})
Then(/^the user should see the table with the rows below$/, (dataTable) => {
	const rows = dataTable.rawTable.flat()
	dynamicTables.getTableRows().each(($el, index) => {
		cy.wrap($el).should("have.text", rows[index])
	})
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (text) => {
	switch (text) {
		case "ADD PRODUCT":
			dynamicTables.getAddProductButton().should("be.enabled").and("have.text", text)
			break
		case "X":
			dynamicTables.getDeleteButton().should("be.enabled")
			break
		case "SUBMIT":
			dynamicTables.getSubmitButton().should("be.enabled")
			break
	}
})

Then(/^the user should see the "([^"]*)" text displayed$/, (text) => {
	dynamicTables.getTotalAmount().should("have.text", text)
})

When(/^the user clicks on the "([^"]*)" button$/, (button) => {
	switch (button) {
		case 'ADD PRODUCT':
			dynamicTables.getAddProductButton().click()
			break
		case 'X':
			dynamicTables.getDeleteButton().click()
			break
		case 'SUBMIT':
			dynamicTables.getSubmitButton().click()
			break
	}
})

Then(/^the user should see the "([^"]*)" modal with its heading$/, (heading) => {
	dynamicTables.getModaltitle().should("have.text", heading)
})

Then(/^the user should see the "([^"]*)" label$/, (label) => {
	switch (label) {
		case 'Please select the quantity':
			dynamicTables.getQuantityLabel().should('have.text', label)
			break
		case 'Please enter the name of the product':
			dynamicTables.getNameLabel().should('have.text', label)
			break
		case 'Please enter the price of the product':
			dynamicTables.getPriceLabel().should('have.text', label)
			break
	}
})

Then(/^the user should see the "([^"]*)" input box is enabled$/, (input) => {
	switch (input) {
		case 'Quantity':
			dynamicTables.getQuantityInput().should("be.enabled")
			break
		case 'Product':
			dynamicTables.getProductInput().should("be.enabled")
			break
		case 'Price':
			dynamicTables.getPriceInput().should("be.enabled")
			break
	}
})

Then(/^the user should not see the "([^"]*)" modal$/, () => {
	dynamicTables.getModal().should('not.exist')
})

Then(/^the user enters the quantity as "([^"]*)"$/, (quantity) => {
	dynamicTables.getQuantityInput().type(quantity)
})

Then(/^the user enters the product as "([^"]*)"$/, (product) => {
	dynamicTables.getProductInput().type(product)
})

Then(/^the user enters the price as "([^"]*)"$/, (price) => {
	dynamicTables.getPriceInput().type(price)
})

Then(/^the user should see the table with the new row below$/, (dataTable) => {
	const row = dataTable.rawTable.flat()
	dynamicTables.getAddedRow().each(($el, index) => {
		cy.wrap($el).should('have.text', row[index])
	})
})