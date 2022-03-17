describe('Second Test', () => {
    it('Visit the app', () => {
        cy.visit('/login');
    });
});

describe('autofill username', () => {
    it('Accepts input', () => {
        const text = 'demo@gmail.com';
        cy.visit('/login');
        cy.get('.new').type(text).should('have.value', text);
    });
});

describe('The Login Page', () => {
    it('sets auth cookie when logging in via form submission', function () {
        const username = "demo@gmail.com";
        const password = "demo1234";
      cy.visit('/login')
  
      cy.get('input[name=username]').type(username)

      cy.get('input[name=password]').type(`${password}{enter}`)
  
      cy.url().should('include', '/home')
  
      cy.getCookie('token').should('exist')
    })
  })

  describe('api testing',() => {
      it('test GET request' , () => {
          cy.request('http://localhost:8080/api/country/getpopulation/1')
          .then((response) => {
            expect(response.body).to.have.property('status',200);
          })
      })
  })