describe('User Interactions - Scroll and view Landing Page Partners', () => {
  it('should scroll to an event section and click a link', () => {
    cy.visit('https://memphistechscene.netlify.app/');
    cy.contains('Our Partners').scrollIntoView();
  });
});