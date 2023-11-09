//Cypress -Spec
//Mocha testing framework--
/// <reference types="Cypress" />

describe('first test Suite', function(){

    it('first test case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(1000) //wait for 1 sec given in milli seconds
        cy.get('.product:visible').should('have.length',4)
    

        //parent child chaining
        cy.get('.products').find('.product').eq(2)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
       // cy.get('.cart-icon > img').click()


         //getting an text from an array of DOM elements
         cy.get('.products').find('.product').each(($el,index,$list) => { 
            const myProduct = $el.find('h4.product-name').text()
            if(myProduct == 'Carrot - 1 Kg') 
            {
                cy.wrap($el).find('button[type="button"]').click()

            }
        })

    })

    // it ('Second test case adding cashews to cart', function (){

       




    // })



    
})