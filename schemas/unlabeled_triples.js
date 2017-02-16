var mongoose = require('mongoose');
var schema = mongoose.Schema;

var unlabeledTriplesSchema = new schema({
	subject: String,
	phrase: String,
	object: String
});

var unlabeledTriples = mongoose.model('unlabeled_triples', unlabeledTriplesSchema);

module.exports = unlabeledTriples;