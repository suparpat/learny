var config      = require('../knexfile.js');  
var env         = 'development';  
var knex        = require('knex')(config[env]);


// Ensure that the schema of our database is always current:

// Migrations are Knex's way of developing and generating schema.
// Each migrations folder is implemented with version control which
// enables the developer to maintain a history of their database schema.

var migrate = knex.migrate.latest([config]);


module.exports = {knex: knex, migrate: migrate};