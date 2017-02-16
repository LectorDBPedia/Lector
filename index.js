var mongoose = require('mongoose');

const conn = mongoose.connect('mongodb://localhost/AGIW');

var relTriples = require('./schemas/rel_triples');
var trustedTriples = require('./schemas/trusted_triples')
var untrustedTriples = require('./schemas/untrusted_triples')
var entityTypes = require('./schemas/entity_types')

mongoose.connection.on('connected', () => {
	relTriples.findOne({}, console.log)
	trustedTriples.findOne({}, console.log)
	untrustedTriples.findOne({}, console.log)
	entityTypes.findOne({}, console.log)
})