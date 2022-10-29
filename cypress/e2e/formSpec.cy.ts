describe("My First Test", () => {
  beforeEach(() => {
    cy.intercept("POST", "nip-info", {
      statusCode: 201,
      body: {
        city: "Poznań",
        name: "Firma testowa",
        regon: "125581923",
        address: "ul. Testowa",
        legal_form: {
          name: "osoba prawna",
        },
        postal_code: "12-345",
        local_number: "",
        address_number: "1B",
        specific_legal_form: {
          name: "spółki z ograniczoną odpowiedzialnością",
        },
      },
    }).as("nipInfo");
  });
  beforeEach(() => {
    cy.intercept("GET", "supplier", {
      statusCode: 201,
      body: [
        "Manufacturer",
        "Distributor/Wholesale",
        "Subcontractor",
        "Equipment/Transportation services provider",
      ],
    }).as("supplier");
  });
  it("Happy path", () => {
    cy.visit("/");
    cy.contains("REGISTER").click();
    cy.url().should("include", "/form");
    cy.get('[id="nip"]').click();
    cy.get('[id="nip"]').type("5252674798");
    cy.get('[id="phoneNumber"]').type("123456789");
    cy.get('[id="email"]').type("test@test.com");
    cy.get('[id="contactName"]').type("John Doe");
    cy.get('[id="contactPhoneNumber"]').type("111222333");
    cy.get('[id="contactPosition"]').type("contact person position");
    cy.get('[id="contactEmail"]').type("contactemail@email.com");
    cy.contains("next").click();
    cy.get('[id="employeesAmount"]').parent().type("1000");
    cy.get('[id="sumOfSales"]').click();
    cy.contains("1000 PLN - 10 000 PLN").click();
    cy.get('[id="departments"]').type("lorem ipsum");
    cy.get('[id="service"]').type("lorem ipsum");
    cy.get('[id="equity"]').click();
    cy.contains("10 000 PLN - 100 000 PLN").click();
    cy.get('[id="taxPayer"]').type("lorem ipsum");
    cy.get('[id="foundingYear"]').type("1999");
    cy.get('[id="supplierCategory"]').click();
    cy.contains("Manufacturer").click();
    cy.contains("next").click();
    cy.contains("next").click();
  });
  it("Nip show extra fields ", () => {
    cy.visit("/form");
    cy.get('[data-testid="fade"]').should("not.be.visible");
    cy.get('[id="city"]').should("not.be.visible");
    cy.get('[id="nip"]').type("7964141711");
    cy.get('[data-testid="fade"]').should("be.visible");
    cy.get('[id="city"]').should("be.visible").should("have.value", "Poznań");
  });
});
