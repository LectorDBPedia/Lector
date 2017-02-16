var mongoose = require('mongoose');
var schema = mongoose.Schema;

var trustedTriplesSchema = new schema({
	subject: String,
	relation: String,
	object: String
});

var trustedTriple = mongoose.model('trustedTriple', trustedTriplesSchema, 'trusted_triples');

module.exports = trustedTriple;