const { FoodModel } = require('../models')

module.exports = {
    findAll: function(req, res) {
        FoodModel
        .find(req.query)
        .then(foodData => res.json(foodData))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        FoodModel
            .findById(req.params.id)
            // .populate("comments")
            .then(foodData => res.json(foodData))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        FoodModel
            .create(req.body)
            .then(foodData => res.json(foodData))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        FoodModel
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(foodData => res.json(foodData))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        FoodModel
            .findById({_id: req.params.id})
            .then(foodData => foodData.remove())
            .then(foodData => res.json(foodData))
            .catch(err => res.status(422).json(err));
    },
}