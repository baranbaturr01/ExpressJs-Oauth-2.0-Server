const mongoose = require('mongoose')

module.exports = () => {

    return mongoose.connect('mongodb://localhost:27038/oauth2', {
    }).then(() => {
        console.log('Database connected');
    }).catch((err) => {
        console.log("err",err);
    }
    )
}