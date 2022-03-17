const mongoose = require('mongoose');
const config =  require('@config');

module.exports = async function MongooseConnection () {
    const connection = mongoose.connect(config.databaseURL,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    return connection;
}