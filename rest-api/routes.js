const router = require('express').Router()
const authController = require('./controllers/authController')
const propsController = require('./controllers/propsController')

router.use('/auth', authController);
router.use('/', propsController)
module.exports = router; 