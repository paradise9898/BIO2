const Router = require('express')
const router = new Router()
const controller = require('../controllers/messagesController')

router.post('/message', controller.send)

module.exports = router