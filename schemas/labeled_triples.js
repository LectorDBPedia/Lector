var mongoose = require('mongoose');
var schema = mongoose.Schema;

var labeledTriplesSchema = new schema({
	subject: String,
	phrase: String,
	object: String, 
	relation: String
});

var labeledTriples = mongoose.model('labeled_triples', labeledTriplesSchema);

module.exports = labeledTriples;