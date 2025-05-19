describe('Home Page', () => {
  it('should load the home page', () => {
    cy.visit('https://memphistechscene.netlify.app/');
    cy.contains('Memphis Tech Scene');
  });
});