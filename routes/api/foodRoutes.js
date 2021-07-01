const router = require('express').Router();
const foodController = require('../../controllers/foodController');
const { FoodModel } = require('../../models');

router.route('/')
    .get(foodController.findAll)
    .post(foodController.create)

router.route('/:id')
    .delete(foodController.remove)

module.exports = router;