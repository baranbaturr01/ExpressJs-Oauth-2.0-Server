const crypto = require('crypto');

module.exports = () => {
    encryptPassword: (password) => {
        return crypto.createHash('sha25', 'secret').
    }
    comparePassword: (password, hash) => {
        return bcrypt.compareSync(password, hash);
    }
}