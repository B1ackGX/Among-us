const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };

        mongoose.connect(`mongodb+srv://discordbot:${process.env.pass}@amongus.vcrst.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connect.on('connected', () => {
            console.log('AMONGUS has connected to the database.')
        })

        mongoose.connect.on('disconnected', () => {
            console.log('AMONGUS has disconnected from the database.')
        })

        mongoose.connect.on('err', (err) => {
            console.log('There was an error connecting to the database: ' + err)
        })
    }
}