const express = require('express');
const router = express.Router()
const authenticate = require('../src/middlewares/Authenticate')


router.post('/register', authenticate, require('../src/controllers/User/register'))


/*OAUTH 2.0 */

router.post('/client', authenticate, require('../src/controllers/Auth/client'))
router.post('/authorize', authenticate, require('../src/controllers/Auth/client'))
router.post('/token', authenticate, require('../src/controllers/Auth/token'))
router.post('/callback', authenticate, require('../src/controllers/Auth/callback'))




module.exports = router