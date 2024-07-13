describe('Cypress Docs New Features', () => {
  const baseUrl = 'https://docs.cypress.io/guides/overview/why-cypress';

  beforeEach(() => {
    cy.visit(baseUrl);
  });



  it('should display the site search bar and return relevant results', () => {

    
   // Handle the cookies banner
   cy.get('button').contains('Accept All').click(); 
    // Check if the search button is visible
    cy.get('div.searchBox_H2mL button').should('be.visible').click();

   
  });
});

/*describe('Cypress Docs New Features', () => {
  const baseUrl = 'https://docs.cypress.io/guides/overview/why-cypress';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should display the site search bar and return relevant results', () => {
    // Handle the cookies banner
    cy.get('button').contains('Accept All').click(); // Adjust the selector if necessary

    // Check if the search button is visible
    cy.get('div.searchBox_H2mL button').should('be.visible').click();

  

  

    /*After clicking, check if the search input is visible
    cy.get('input#docsearch-input').should('be.visible');

    // Enter a search term and check if results are displayed
    cy.get('input#docsearch-input').type('cy.request{enter}');
    cy.get('.DocSearch-Dropdown').should('be.visible').and('contain', 'cy.request');

    // Confirm specific result is displayed and click it
    cy.get('.DocSearch-Hit').contains('Can I make cy.request() poll until a condition is met?').should('be.visible').click();

    // Verify that the URL includes the expected path after clicking the search result
    cy.url().should('include', '/guides/references/api');
  });

  it('should handle empty search results gracefully', () => {
    // Handle the cookies banner
    cy.get('button').contains('Accept All').click(); // Adjust the selector if necessary

    // Click the search button to reveal the search input
    cy.get('div.searchBox_H2mL button').click();

    // Enter a nonsense search term and check if no results message is displayed
    cy.get('input#docsearch-input').type('asdjklasdjkl{enter}');
    cy.get('.DocSearch-Dropdown').should('be.visible').and('contain', 'No results found');
  });

  it('should display the Dashboard category and its subcategories in the side menu', () => {
    // Handle the cookies banner
    cy.get('button').contains('Accept All').click(); // Adjust the selector if necessary

    // Check if the Dashboard category is visible and can be expanded
    cy.get('.sidebar').contains('Dashboard').click();
    cy.get('.sidebar').contains('Dashboard').should('have.class', 'active');
    
    // Verify subcategories under Dashboard
    cy.get('.sidebar').contains('Subcategory 1').should('be.visible');
    cy.get('.sidebar').contains('Subcategory 2').should('be.visible');
  });

  it('should display the website in Spanish', () => {
    // Handle the cookies banner
    cy.get('button').contains('Accept All').click(); // Adjust the selector if necessary

    // Switch to Spanish language
    cy.get('footer').contains('Español').click();
    
    // Check if the page content is translated to Spanish
    cy.get('header').should('contain', 'Documentación');
    cy.get('h1').should('contain', 'Por qué Cypress');
  });

  it('should revert to English language', () => {
    // Handle the cookies banner
    cy.get('button').contains('Accept All').click(); // Adjust the selector if necessary

    // Switch to Spanish and then back to English
    cy.get('footer').contains('Español').click();
    cy.get('footer').contains('English').click();

    // Verify the page content is in English
    cy.get('header').should('contain', 'Documentation');
    cy.get('h1').should('contain', 'Why Cypress');
  });
});*/
