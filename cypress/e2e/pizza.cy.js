describe('Pizza ek malzeme seçim testi', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    });

    it('En fazla 3 ek malzeme seçebilirsiniz', () => {
        const toppings = ['pepperoni', 'domates', 'biber', 'sucuk', 'tavukızgara', 'mısır', 'kanadajambonu'];

        toppings.forEach((topping, index) => {
            cy.get(`#${topping}`).check();
            if (index <= 2) {
                cy.get(`#${topping}`).should('be.checked');
            } else {
                cy.get(`#${topping}`).should('not.be.checked');
            }
        });



    });

    describe('Not alanı minimum uzunluğu kontrolü', () => {
        it('Not alanı minimum 5 karakterden oluşmalıdır', () => {
            cy.visit('http://localhost:3000/pizza'); // Test edilen sayfayı ziyaret et

            // Not alanına eriş ve değeri gir
            cy.get('#not').type('abcd');

            // Değerin girilmediğini ve hata mesajının görüntülendiğini doğrula
            cy.get('#not')
                .should('have.text', 'abcd');
            cy.should('Not alanı minimum 5 karakterden oluşmalıdır');
        });
    });





});