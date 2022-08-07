const router = require('express').Router()
const User = require ('../models/user')
const jwt = require ('jsonwebtoken')

router.post('/register', (req, res) => {
    console.log(req.body)
   let user = new User(req.body)
   user.save()
   .then(userNew => {
    console.log(userNew);
    res.status(201).json({_id: userNew._id})
})
});
router.post('/login', (req, res) => {
   User.findOne({username: req.body.username, password: req.body.password})
   .then(u => {
    console.log(u);
    let token = jwt.sign({
        _id: u._id,
        username: u.username,
    }, 'SECRET', {expiresIn: '1h'});
    res.status(200).json({
        username: u.username,
        authtoken: token,
        userId: u._id.toString()
    })
})
   .catch( error => {console.log(error)})
})
module.exports = router; 