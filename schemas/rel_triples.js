var mongoose = require('mongoose');
var schema = mongoose.Schema;

var relTriplesSchema = new schema({
	subject: String,
	phrase: String,
	object: String
});

var RelTriple = mongoose.model('rel_triples', relTriplesSchema);

module.exports = RelTriple;