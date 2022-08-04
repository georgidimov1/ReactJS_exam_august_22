const router = require('express').Router()
const User = require ('../models/user')

router.post('/register', (req, res) => {
    console.log(req.body)
   let user = new User(req.body)
   user.save()
   .then(user => console.log(user._id))
});
module.exports = router; 