var mongoose = require('mongoose');
var schema = mongoose.Schema;

var relationPhrasesSchema = new schema({
	relation: String,
	phrase: String,
	count: Number
});

var relationPhrase = mongoose.model('relationPhrase', relationPhrasesSchema, 'relation_phrases');

module.exports = relationPhrase;