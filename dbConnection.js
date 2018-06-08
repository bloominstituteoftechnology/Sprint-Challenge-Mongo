const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/budgettracker', {}, error => {
  error
    ? console.log('\n*** ERROR Connecting to Database ***\n', error)
    : console.log('\n... API Connected to Database ...\n');
});