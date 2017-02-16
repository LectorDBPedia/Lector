var mongoose = require('mongoose');
var schema = mongoose.Schema;

var relTriplesSchema = new schema({
	subject: String,
	phrase: String,
	object: String
});

var relTriple = mongoose.model('relTriple', relTriplesSchema, 'rel_triples');

module.exports = relTriple;