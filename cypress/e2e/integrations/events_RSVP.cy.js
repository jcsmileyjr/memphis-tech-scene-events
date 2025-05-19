describe('Navigate to the Events page and click an RSVP link', () => {
    it('should navigate to the Events page', () => {
        cy.visit('https://memphistechscene.netlify.app/');

        // Open nav menu if on mobile
        cy.get('[aria-label="Toggle navigation menu"]').click();

        cy.contains('Events').click();
        cy.url().should('include', '/events');
        cy.contains('Filters');
        
        // Wait for events to load and click the first RSVP link
        cy.contains(/(Click here for details|RSVP)/i).should('be.visible');
    });
});