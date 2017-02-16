var mongoose = require('mongoose');
var schema = mongoose.Schema;

var untrustedTriplesSchema = new schema({
	subject: String,
	relation: String,
	object: String
});

var untrustedTriple = mongoose.model('untrusted_triples', untrustedTriplesSchema);

module.exports = untrustedTriple;