class DynamicTables {
    getInventortyText() {
        return cy.get(".is-size-3")
    }
    getHeaders() {
        return cy.get('.DynamicTables_tableHeaders__k53h5 > .header ')
    }
    getTableRows() {
        return cy.get("td")
    }
    getAddProductButton() {
        return cy.get("#add_product_btn")
    }
    getTotalAmount() {
        return cy.get("#total_amount")
    }
    getModaltitle() {
        return cy.get("#modal_title")
    }
    getDeleteButton() {
        return cy.get(".delete")
    }
    getLabels() {
        return cy.get("#name_form label")
    }
    getInputs() {
        return cy.get("#name_form input")
    }
    getQuantityLabel() {
        return cy.get('.field [for="product_quantity"]')
    }
    getNameLabel() {
        return cy.get('.field [for="product_name"]')
    }
    getPriceLabel() {
        return cy.get('.field [for="product_price"]')
    }
    getQuantityInput() {
        return cy.get('.field [id="quantity"]')
    }
    getProductInput() {
        return cy.get('.field [id="product"]')
    }
    getPriceInput() {
        return cy.get('.field [id="price"]')
    }

    getSubmitButton(){
        return cy.get('#submit')
    }
    getModal(){
        return cy.get('.modal.is-active')
    }
    getAddedRow(){
        return cy.get('#product_table > tbody > tr:last-child > td')
    }
    
}



module.exports = DynamicTables