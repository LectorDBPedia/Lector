var mongoose = require('mongoose');
var schema = mongoose.Schema;

var trustedTriplesSchema = new schema({
	subject: String,
	relation: String,
	object: String
});

var trustedTriple = mongoose.model('trusted_triples', trustedTriplesSchema);

module.exports = trustedTriple;