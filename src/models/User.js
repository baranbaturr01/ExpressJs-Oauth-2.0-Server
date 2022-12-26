const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    }
}, {
    collation: 'users',
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
})

module.exports = mongoose.model('User', UserSchema)