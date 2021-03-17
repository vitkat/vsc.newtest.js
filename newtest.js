describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.viewport(1280, 720);
        cy.visit('www.vk.com');
        cy.get('#ij_first_name').type('Dmitriy');
        cy.get('#ij_last_name').type('Smeh');
        cy.get('#ij_submit').click;
        cy.get('#ts_input').type('Dmitriy Smeh');
        cy.get('#index_email').type('Dmitriysmeh@mail.ru');
        cy.get('#index_pass').type('12345qwerty');
        cy.get('#index_login_button').click;

    })
})