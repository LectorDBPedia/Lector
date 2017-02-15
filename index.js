var mongoose = require('mongoose');

const conn = mongoose.connect('mongodb://localhost/AGIW');

var relTriples = require('./schemas/relTriples');

mongoose.connection.on('connected', () => {
	relTriples.findOne({}, console.log)
})