const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({

    name: String,
    client_id: {
        type: String,
        unique: true,
    },
    client_secret: {
        type: String,
        required: true,
    },
    redirect_uri: {
        type: String,
        required: true,
    },
    grants: {
        type: String,
        required: true,
    },
    scope: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    }
}, {
    collation: 'clients',
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
})

module.exports = mongoose.model('Client', ClientSchema)