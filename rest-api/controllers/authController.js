const router = require('express').Router()
const User = require ('../models/user')

router.post('/register', (req, res) => {
    console.log(req.body)
   let user = new User(req.body)
   user.save()
   .then(userNew => {
    console.log(userNew);
    res.status(201).json({_id: userNew._id})
})
});
module.exports = router; 