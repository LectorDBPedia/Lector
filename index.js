var async = require("async");

var connection = require('./connection')

var relTriples = require('./schemas/rel_triples');
var trustedTriples = require('./schemas/trusted_triples')
var untrustedTriples = require('./schemas/untrusted_triples')
var entityTypes = require('./schemas/entity_types')

connection.on('connected', () => {

/*esecuzione dei task in parallelo, ogni res viene messo in un array result finale*/
	async.parallel([
	function(callback){
		relTriples.findOne({}, (err, res) => {callback(err, res)})
	},
	function(callback){
		trustedTriples.findOne({}, (err, res) => {callback(err, res)})
	},
	function(callback){
		untrustedTriples.findOne({}, (err, res) => {callback(err, res)})
	},
	function(callback){
		entityTypes.findOne({}, (err, res) => {callback(err, res)})
	}], (err, result) => { //funzione eseguita alla fine di tutte le funzioni sopra
		
		console.log(result)
		connection.close(() => {console.log('connection closed, task completed')})
	
	});
})