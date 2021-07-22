const router = require('express').Router();
const locationController = require('../../controllers/locationController');
const { LocationModel } = require('../../models');

//api/location/...

router.route('/')
    .get(locationController.findAll)
    .post(locationController.create)

router.route('/locationName')
    .get(locationController.findAllNames)

router.route('/:id')
    .get(locationController.findById)
    .delete(locationController.remove)

router.route('/food')
    .post(locationController.addFood)
    .get(locationController.findAllWithFoods)

module.exports = router;