// Empty module stub for Node.js-only modules that shouldn't be bundled for client
// This is used to resolve config/loader and other server-only modules in the atomix package
// Webpack will replace these modules with this stub in client bundles

// Export an object with the expected loadAtomixConfig function
// This should never actually be called in client-side code since
// loadThemeFromConfigSync checks for window before requiring this
module.exports = {
  loadAtomixConfig: function() {
    // This should never be called in client-side code
    throw new Error('loadAtomixConfig should not be called in client-side code. This is a server-only function.');
  }
};

