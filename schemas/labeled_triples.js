var mongoose = require('mongoose');
var schema = mongoose.Schema;

var labeledTriplesSchema = new schema({
	subject: String,
	phrase: String,
	object: String, 
	relation: String
});

var labeledTriple = mongoose.model('labeledTriple', labeledTriplesSchema,'labeled_triples');

module.exports = labeledTriple;