/// <reference types="cypress" />

describe('Calculadora', () => {
  beforeEach(() => {
    cy.visit('/calculadora');
  });

  it('Deve somar dois números', () => {
    cy.get('button[name="2"]').click();
    cy.get('button[name="+"]').click();
    cy.get('button[name="2"]').click();
    cy.get('button[name="calcular"]').click();

    cy.get('div[name="display"]').should('contain', '4');
  });

  it('Deve subtrair dois números', () => {
    cy.get('button[name="2"]').click();
    cy.get('button[name="-"]').click();
    cy.get('button[name="2"]').click();
    cy.get('button[name="calcular"]').click();

    cy.get('div[name="display"]').should('contain', '0');
  });

  it('Deve dividir dois números', () => {
    const button = cy.get('button[name="2"]');
    button.click();
    button.click();
    cy.get('button[name="/"]').click();

    cy.get('button[name="2"]').click();

    cy.get('button[name="calcular"]').click();

    cy.get('div[name="display"]').should('contain', '11');
  });

  it('Deve multiplicar dois números', () => {
    const button = cy.get('button[name="2"]');
    button.click();
    button.click();
    cy.get('button[name="*"]').click();

    cy.get('button[name="2"]').click();

    cy.get('button[name="calcular"]').click();

    cy.get('div[name="display"]').should('contain', '44');
  });

  it('Deve multiplicar dois números', () => {
    cy.get('button[name="2"]').click();

    cy.get('button[name="C"]').click();

    cy.get('div[name="display"]').should('contain.html', '');
  });
});
