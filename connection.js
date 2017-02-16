var mongoose = require('mongoose')
var connectionConfig = require('./config').connection
var connection

if(connectionConfig.port != ''){
	mongoose.connect('mongodb://'+ connectionConfig.host +':' + connectionConfig.port + '/' + connectionConfig.dbname)
} else {
	mongoose.connect('mongodb://'+ connectionConfig.host +'/' + connectionConfig.dbname)
}

module.exports = mongoose.connection
