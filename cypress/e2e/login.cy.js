describe("Login Test", () => {
    it("should log in successfully", () => {
      cy.visit("http://localhost:3000/login");
  
      // Type the email and password
      cy.get('input[type="email"]').type("finola1997@gmail.com");
      cy.get('input[type="password"]').type("123");
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Profile information should appear on screen
      cy.contains("Profile information").should("be.visible");
    });
    it("An incorrect password should show an error msg", () => {
        cy.visit("http://localhost:3000/login");
    
        // Type correct email and incorrect password
        cy.get('input[type="email"]').type("finola1997@gmail.com");
        cy.get('input[type="password"]').type("456");
    
        // Submit the form
        cy.get('button[type="submit"]').click();
    
        // the error msg should appear
        cy.contains("Incorrect details entered please try again.").should("be.visible");
      });
    it("An incorrect email should show an error msg", () => {
        cy.visit("http://localhost:3000/login");

        // Type incorrect email and correct password
        cy.get('input[type="email"]').type("Jane@hotmail.com");
        cy.get('input[type="password"]').type("123");

        // Submit the form
        cy.get('button[type="submit"]').click();

        // the error msg should appear
        cy.contains("Incorrect details entered please try again.").should("be.visible");
    });
  });
  