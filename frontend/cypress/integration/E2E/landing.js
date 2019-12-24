describe('Core Features', () => {
    context('App', () => {
        it('Renders without crashing', () => {
            cy.goHome(5000);
            cy.get('.workspace').as('workspace');
            expect('workspace').to.exist;
        });
    });
    context('Set Key', () => {
        it('Displays current key', () => {
            cy.get('.currentKey').should('contain', 'C');
        });
        it('Can change key', () => {
            cy.get('button').contains('Change Key').click();
            cy.get('div').contains('F').click();
            cy.get('.currentKey').should('contain', 'F');
        });
    });
    context('Create Phrase', () => {
        it('Can add chords', () => {
            cy.goHome(2000); 
            cy.get('div').contains('F').click();
            cy.get('.display').should('contain', 'F')
            cy.get('div').contains('GMajor').click();
            cy.get('.display').should('contain', 'G')
        });
        it('Can add and remove duplicates', () => {
            cy.get('div').contains('FMajor').click();
            cy.get('.display > div').first().click();
            cy.get('.display').should(($d) => {
                expect($d).to.contain.text('GMajorFMajor')
            })
        });
    });
});