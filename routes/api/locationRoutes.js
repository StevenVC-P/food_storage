const router = require('express').Router();
const locationController = require('../../controllers/locationController');
const { LocationModel } = require('../../models');

router.route('/')
    .get(locationController.findAll)
    .post(locationController.create)

router.route('/:id')
    .delete(locationController.remove)

router.route('/food')
    .post(locationController.addFood)
    .get(locationController.findAllWithFoods)

module.exports = router;