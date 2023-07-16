const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

function initialize () {
    mongoose.connect(process.env.DB_CONNECTION, options
    ).then(() => {
        console.log("Connected to the database.")
    }).catch((error) => {
        console.log(`Failed to connect to the database: ${error}`)
    })
}

module.exports =  {
    initialize
}