const router = require('express').Router()
const Property = require ('../models/property')

router.post('/properties', (req, res) => {
    console.log(req.body)
   let property = new Property(req.body)
   property.save()
   .then(p => {
    res.status(200).json(p)})
});

router.get('/properties', (req, res) => {
    Property.find()
    .then(p => {
         res.status(200).json(p)
    })
})
router.get('/properties/delete/:id', (req, res) => {
    Property.findByIdAndDelete(req.params.id)
    .then(p => {
         res.status(200).json(p)
    })
})
router.get('/properties/edit/:id', (req, res) => {
    Property.findById(req.params.id)
    .then(p => {
         res.status(200).json(p)
    })
})
router.post('/properties/edit/:id', (req, res) => {
    Property.findByIdAndUpdate(req.params.id, req.body)
    .then(p => {
         res.status(200).json(p)
    })
})
module.exports = router; 