/// <reference types="cypress" />

describe('Login', function () {
  this.beforeEach(function () {
    cy.fixture('login').then(function (data) {
      this.data = data;
    });
  });

  it('Deve realizar o login', function () {
    // cy.visit('/login');
    // cy.get('input[id="email"]').type(this.data.usuarioValido.email);

    // cy.get('#password').type(this.data.usuarioValido.senha);

    // cy.contains('Acessar').click();

    cy.login(this.data.usuarioValido.email, this.data.usuarioValido.senha);

    cy.url().should('contain', '/foruns');
  });

  it('Deve mostrar mensagem de login inválido', function () {
    // cy.visit('/login');
    // cy.get('input[id="email"]').type(this.data.usuarioInvalido.email);
    // cy.get('#password').type(this.data.usuarioInvalido.senha);

    // cy.contains('Acessar').click();

    cy.login(this.data.usuarioInvalido.email, this.data.usuarioInvalido.senha);

    cy.get('.MuiCardContent-root > .MuiTypography-root').should('contain', 'Email ou senha inválida');
  });
});
