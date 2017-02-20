var mongoose = require('mongoose')
var schema = mongoose.Schema;

var redirectSchema = new schema({
	wiki_id: String,
	redirect: String
});

var redirect = mongoose.model('redirect', redirectSchema, 'redirects');

module.exports = redirect;