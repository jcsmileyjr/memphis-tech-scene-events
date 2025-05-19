describe('Navigation', () => {
    it('should navigate to the Events page', () => {
        cy.visit('https://memphistechscene.netlify.app/');
        // cy.get('[aria-label="Toggle navigation menu"]').click(); //Keep for backwards compatibility

        // Check if the nav toggle exists and click if present
        cy.get('body').then($body => {
        if ($body.find('[aria-label="Toggle navigation menu"]').length) {
            cy.get('[aria-label="Toggle navigation menu"]').click();
        }
        });        

        cy.contains('Events').click();
        cy.url().should('include', '/events');
        cy.contains('Filters');
    });
});