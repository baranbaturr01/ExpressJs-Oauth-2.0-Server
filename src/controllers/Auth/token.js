const Client = require('../../models/Client')

module.exports = (req, res, next) => {
    const clientId = req.body.client_id
    const code = req.body.code
    const grantType = req.body.grant_type

    return new Client.findOne({ client_id: clientId }).then(client => {
        if (!client) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        if (grantType !== 'authorization_code') {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        if (code !== req.session.authorizationCode) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const accessToken = Math.random().toString(36).substring(2)
        req.session.accessToken = accessToken

        return res.status(200).json({ access_token: accessToken })
    }
    ).catch(err => {
        return res.status(500).json({ message: err.message })
    }
    )

}