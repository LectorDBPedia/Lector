var mongoose = require('mongoose');
var schema = mongoose.Schema;

var newRelTriplesSchema = new schema({
	subject: String,
	phrase: String,
	object: String
});

var newRelTriple = mongoose.model('newRelTriple', newRelTriplesSchema, 'new_rel_triples');

module.exports = newRelTriple;