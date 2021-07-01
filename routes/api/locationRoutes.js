const router = require('express').Router();
const locationController = require('../../controllers/locationController');
const { LocationModel } = require('../../models');

router.route('/')
    .get(locationController.findAll)
    .post(locationController.create)

router.route('/:id')
    .delete(locationController.remove)

module.exports = router;