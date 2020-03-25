const 
knex       = require('knex'),
config     = require('../../knexfile'),
connection = knex(config.development);

module.exports = connection;