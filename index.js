var connection = require('./connection')

var relTriples = require('./schemas/rel_triples');
var relTriplesNotUniq = require('./schemas/rel_triples_not_uniq')
var trustedTriples = require('./schemas/trusted_triples')
var untrustedTriples = require('./schemas/untrusted_triples')
var entityTypes = require('./schemas/entity_types')
var relationPhrases = require('./schemas/relation_phrase');
var unlabeledTriples = require('./schemas/unlabeled_triples')
var labeledTriples = require('./schemas/labeled_triples')
var newRelTriple = require('./schemas/new_rel_triples')


connection.on('connected', () => {


	var stream = newRelTriple.find({}).stream();
	stream.on('data', (doc) => {

		untrustedTriples.find({'subject': doc.subject, 'object' : doc.object}, (err, res) =>{
			if (!res.length){
				unlabeledTriples.create(doc._doc, (err, res) => {})
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
		console.log("stream terminated")
	})
})
