const model = {
    getAccessToken: (accessToken) => {
        return new Promise((resolve, reject) => {
            db.AccessToken.findOne({ where: { token: accessToken } }).then((token) => {
                if (!token) {
                    return reject(new Error('Invalid access token'))
                }
                return resolve(token)
            }).catch(reject)
        })
    },

    getRefreshToken: (refreshToken) => {
        return new Promise((resolve, reject) => {
            db.RefreshToken.findOne({ where: { token: refreshToken } }).then((token) => {
                if (!token) {
                    return reject(new Error('Invalid refresh token'))
                }
                return resolve(token)
            }).catch(reject)
        })
    },

    getClient: (clientId, clientSecret) => {
        return new Promise((resolve, reject) => {
            db.Client.findOne({ where: { id: clientId } }).then((client) => {
                if (!client || client.secret !== clientSecret) {
                    return reject(new Error('Invalid client'))
                }
                return resolve(client)
            }).catch(reject)
        })
    },

    saveAccessToken: (accessToken, clientId, expires, user) => {
        return new Promise((resolve, reject) => {
            db.AccessToken.create({
                token: accessToken,
                expires: expires,
                ClientId: clientId,
                UserId: user.id,
            }).then(resolve).catch(reject)
        })
    },

    grantTypeAllowed: (clientId, grantType) => {
        return new Promise((resolve, reject) => {
            if (grantType === 'password') {
                return resolve(true)
            } else if (grantType === 'refresh_token') {
                return resolve(true)
            }
            return reject(new Error('Invalid grant type'))
        })
    }

}

module.exports = model