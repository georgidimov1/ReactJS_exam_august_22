const router = require('express').Router()
const Property = require ('../models/property')

router.post('/property', (req, res) => {
    console.log(req.body)
   let property = new Property(req.body)
   property.save()
   .then(property => console.log(property._id))
});
module.exports = router; 