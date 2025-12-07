describe("test", () => {
  it("test one", () => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.get(".hero-descriptor_btn.btn.btn-primary").click();
    cy.get(".modal-header .modal-title").should("have.text", "Registration");
    cy.get(".close").click();

    cy.get(".contacts_link.display-4").invoke("removeAttr", "target").click();
    cy.url().should("eq", "https://ithillel.ua/");
  });
});

function removeAttribute (element, attributeTitle) {
  return element.invoke("removeAttr", attributeTitle).click();
}