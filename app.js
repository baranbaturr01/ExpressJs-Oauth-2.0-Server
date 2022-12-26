const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

//connect to database
return mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    console.log('Database connected');
    const app = express();

    //routes
    app.use('/api', require('./routes/router'));

    app.listen(3000, () => {
        console.log('Server started on port 3000');
    })
}).catch((err) => {
    console.log("err", err);
}
)
