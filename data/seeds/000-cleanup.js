const cleaner = require('knex-cleaner');
//prevents FK errors
// when trying to truncate tables that have
// FK pointing to them
exports.seed = function(knex) {
  return cleaner.clean(knex)
  //after this command - all tables are empty
  //all primary keys are reset
};
