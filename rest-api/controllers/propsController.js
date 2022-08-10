const router = require('express').Router()
const Property = require ('../models/property')

router.post('/properties', (req, res) => {
    console.log(req.body)
   let property = new Property(req.body)
   property.save()
   .then(property => console.log(property._id))
});

router.get('/properties', (req, res) => {
    Property.find({})
    .then(p => {
        console.log(p);
        res.status(200).json({p})
    })
})
module.exports = router; 