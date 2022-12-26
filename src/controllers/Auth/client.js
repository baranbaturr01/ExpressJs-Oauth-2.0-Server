const Client = require('../../models/Client')

module.exports = (req, res, next) => {

    const name = req.body.name
    const redirectUri = req.body.redirectUri

    const clientId = Math.random().toString(36).substring(2)
    const clientSecret = Math.random().toString(36).substring(2)

    const client = new Client({
        name: name,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grants: 'authorization_code',
        scope: 'read',
        user_id: req.session.userId,
    })

    return client.save().then(client => {
        return res.status(200).json({ client: client })
    }
    ).catch(err => {
        return res.status(500).json({ message: err.message })
    }
    )

}   