var mongoose = require('mongoose');
var schema = mongoose.Schema;

var relationPhrasesSchema = new schema({
	relation: String,
	phrase: String,
	count: Number
});

var relationPhrase = mongoose.model('relation_phrases', relationPhrasesSchema);

module.exports = relationPhrase;