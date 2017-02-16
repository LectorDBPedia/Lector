var mongoose = require('mongoose');
var schema = mongoose.Schema;

var unlabeledTriplesSchema = new schema({
	subject: String,
	phrase: String,
	object: String
});

var unlabeledTriple = mongoose.model('unlabeledTriple', unlabeledTriplesSchema, 'unlabeled_triples');

module.exports = unlabeledTriple;