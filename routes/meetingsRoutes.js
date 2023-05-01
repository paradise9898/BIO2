const Router = require('express')
const router = new Router()
const controller = require('../controllers/meetingsController')

router.post('/meetings', controller.booking)

module.exports = router