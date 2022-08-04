const router = require('express').Router()
const authController = require('./controllers/authController')
const propsController = require('./controllers/propsController')

router.use('/auth', authController);
router.use('/properties', propsController)
module.exports = router; 