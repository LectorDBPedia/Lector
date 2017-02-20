var connection = require('./connection')

var relTriplesNotUniq = require('./schemas/rel_triples_not_uniq')
var newRelTriple = require('./schemas/new_rel_triples')
var redirect = require('./schemas/redirect')

connection.on('connected', () => {

	var stream = relTriplesNotUniq.find({}).stream()

	stream.on('data', triple => {
		redirect.find( { $or: [{'redirect': triple.subject},{'redirect': triple.object}]}, (err, results) => { 

				const subred = results.filter(a => a.subject === triple.subred)[0];
				const objred = results.filter(a => a.objred === triple.objred)[0];
				
				if(subred && objred){
					newRelTriple.create({'subject': subred.wiki_id, 'phrase': triple.phrase, 'object': objred.wiki_id},()=>{})
				}
				else if(subred){
					newRelTriple.create({'subject': subred.wiki_id, 'phrase': triple.phrase, 'object': triple.object},()=>{})
				}
				else if(objred){
					newRelTriple.create({'subject': triple.subject, 'phrase': triple.phrase, 'object': objred.wiki_id},()=>{})
				} else {
					newRelTriple.create({'subject': triple.subject, 'phrase': triple.phrase, 'object': triple.object}, ()=>{})
				}
		})
	})
})
