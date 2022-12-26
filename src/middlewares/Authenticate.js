const Oauth2Server = require('oauth2-server')
const oauth2Server = new Oauth2Server({
    model: require('./Model'),
})


module.exports = (req, res, next) => {

    const request = new Request(req)
    const response = new Response(res)

    return oauth2Server.authenticate(request, response).then(token => {
        req.session.token = token
        next()
    }).catch(err => {
        res.status(err.code || 500).json(err)
    })
}