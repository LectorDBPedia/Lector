var mongoose = require('mongoose');
var schema = mongoose.Schema;

var untrustedTriplesSchema = new schema({
	subject: String,
	relation: String,
	object: String
});

var untrustedTriple = mongoose.model('untrustedTriple', untrustedTriplesSchema, 'untrusted_triples');

module.exports = untrustedTriple;