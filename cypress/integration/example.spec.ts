describe("Example", () => {
  it.only("is Cypress working?", () => {
    cy.visit("/");
    cy.get("[data-testid='title']").should("contain.text", "Hello world!");
  });
});

export {};
