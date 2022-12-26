const Client = require('../../models/Client')
module.exports = (req, res, next) => {

    const code = req.query.code
    const clientId = req.headers.client_id
    const clientSecret = req.headers.client_secret

    if (code !== req.session.authorizationCode) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }


    return new Client.findOne({ client_id: clientId, client_secret: clientSecret }).then(client => {
        if (!client) {
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