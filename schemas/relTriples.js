var mongoose = require('mongoose');
var schema = mongoose.Schema;

var relTriplesSchema = new schema({
	Entity_1: String,
	Phrase: String,
	Entity_2: String
});

var RelTriple = mongoose.model('RelTriple', relTriplesSchema, 'RelTriples');

module.exports = RelTriple;