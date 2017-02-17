var mongoose = require('mongoose');
var schema = mongoose.Schema;

var relTriplesSchema = new schema({
	subject: String,
	phrase: String,
	object: String
});

var relTripleNotUniq = mongoose.model('relTripleNotUniq', relTriplesSchema, 'rel_triples_not_uniq');

module.exports = relTripleNotUniq;