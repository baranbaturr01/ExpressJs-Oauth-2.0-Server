const mongoose = require('mongoose')

const AccessTokenSchema = new mongoose.Schema({

    access_token: {
        type: String,
        unique: true,
    },
    expires: {
        type: Date,
        required: true,
    },
    client_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    }
}, {
    collation: 'access_tokens',
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
})


module.exports = mongoose.model('AccessToken', AccessTokenSchema)