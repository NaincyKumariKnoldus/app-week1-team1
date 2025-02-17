// CAN NAVIGATE TO AN EXISTING PAGE

it("Can navigate to an existing page", () => {
  // fails
  // cy.visit("localhost:3333/wrong");

  // works
  // cy.visit("about");
  cy.visit("localhost:3333/");
});

// CAN SUBMIT A FORM

it("Can submit a form", () => {
  cy.visit("/");

  // // enter name of the user
  cy.get("#submit-post-form")
    .find("input[name='user']")
    .type("Super Luigi");
  cy.contains("Post").click();

  // submit the form

  // cy.get("#submit-post-form").submit();
});

// // CAN REDIRECT AFTER SUBMITTING FORM
it("Can submit and redirects form", () => {
  cy.visit("/");

  // // enter name of the user
  cy.get("#submit-post-form")
    .find("input[name='user']")
    .type("Super Luigi");
  cy.contains("Post").click();
  cy.url().should("include", "/");

  // submit the form

  // cy.get("#submit-post-form").submit();
});

// CAN DELETE A POST
it("Can delete posts from page", () => {
  cy.visit("/");
  cy.get("#delete-post-btn")
    //.find("#delete-post-btn")
    .click();
  cy.get("#Paolo").should("not.exist");
});

// CAN GENERATE A NAME
it("Can add a user", () => {
  cy.visit("/");
  cy.get("#submit-post-form")
  .find("input[name='user']")
  .type("milly");
  cy.contains("Post").click();
  // Get the form and user submits a name onto page
  cy.get("li").find("h2").contains("milly");
})

// CAN GENERATE A PARAGRAPH
it("Can add a message", () => {
  cy.visit("/")
  cy.get("#submit-post-form")
  .find("textarea[name='message']")
  .type("hi");
  cy.contains("Post").click();
  cy.get("li").find("p").contains("hi");
})
