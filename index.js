var async = require("async");

var connection = require('./connection')

var relTriples = require('./schemas/rel_triples');
var trustedTriples = require('./schemas/trusted_triples')
var untrustedTriples = require('./schemas/untrusted_triples')
var entityTypes = require('./schemas/entity_types')
var relationPhrases = require('./schemas/relation_phrase');
var unlabeledTriples = require('./schemas/unlabeled_triples')
var labeledTriples = require('./schemas/labeled_triples')

connection.on('connected', () => {


	var stream = relTriples.find({}).stream();
	stream.on('data', (doc) => {

		trustedTriples.find({'subject': doc.subject, 'object' : doc.object}, (err, res) =>{
			if (!res.length){
				unlabeledTriples.create(doc._doc, (err, res) => {}) //loggare in qualche modo
			} else {
				const entriesPromises = Promise.all([res.map((r) => {
					return Promise.all([
						labeledTriples.create({'subject': doc.subject, 'phrase': doc.phrase, 'object': doc.object, 'relation': r.relation}),
						relationPhrases.findOne({'relation' : r.relation, 'phrase': doc.phrase})
						]).then(([_, resultFindOne]) => {
							return relationPhrases.update({"relation": r.relation, "phrase": doc.phrase}, {$inc: {"count": 1}}, {upsert: true})
						})
					})]);
				entriesPromises.then(() => {
				})
				.catch(console.error);
			}
		})

	})

	stream.on('close', () => {
		connection.close( () => { 
			console.log('connection closed, task completed, or error')
		})
	})
})
