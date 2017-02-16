var mongoose = require('mongoose');
var schema = mongoose.Schema;

var entityTypesSchema = new schema({
	entity: String,
	type: String
});

var entityType = mongoose.model('entity_types', entityTypesSchema);

module.exports = entityType;