const User = require('../../models/User')
const Client = require('../../models/Client')

module.exports = (req, res, next) => {

    const username = req.body.username
    const password = req.body.password
    const clientId = req.body.clientId

    return new User.findOne({ username: username, password: password }).then(user => {
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        return new Client.findOne({ user_id: user._id, clientId: clientId }).then(client => {
            if (!client) {
                return res.status(401).json({ message: 'Invalid credentials' })
            }

            const authorizationCode = Math.random().toString(36).substring(2)
            req.session.authorizationCode = authorizationCode

            return res.status(200).json({ authorizationCode: authorizationCode })
        })
    }).catch(err => {
        return res.status(500).json({ message: err.message })
    })
}
