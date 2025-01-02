Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore errors related to undefined 'response' property
    if (err.message.includes("Cannot read properties of undefined (reading 'response')")) {
        return false; // Prevent Cypress from failing the test
    }
    // Let other errors propagate
    return true;
});
