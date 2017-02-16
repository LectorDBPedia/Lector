var mongoose = require('mongoose');
var schema = mongoose.Schema;

var entityTypesSchema = new schema({
	entity: String,
	type: String
});

var entityType = mongoose.model('entityType', entityTypesSchema, 'entity_types');

module.exports = entityType;