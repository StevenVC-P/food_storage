const { LocationModel, FoodModel } = require('../models')

module.exports = {
    findAll: function(req, res) {
        LocationModel
        .find(req.query)
        .populate("foods")
        .then(locationData => res.json(locationData))
        .catch(err => res.status(422).json(err));
    },
    findAllNames: function(req, res) {
        LocationModel
        .find({"locationName":{"$exists":"true"}})
        .then(locationData => {
            let data = [];
            for(let i = 0; i<locationData.length; i++){
               data.push({value: locationData[i].locationName})
            }
            console.log(data)
            res.json(data)})
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        LocationModel
            .findById(req.params.id)
            .then(locationData => res.json(locationData))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        LocationModel
            .create(req.body)
            .then(locationData => res.json(locationData))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        LocationModel
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(locationData => res.json(locationData))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        LocationModel
            .findById({_id: req.params.id})
            .then(locationData => locationData.remove())
            .then(locationData => res.json(locationData))
            .catch(err => res.status(422).json(err));
    },
    addFood: function(req, res) {
        console.log("Controller1", req.body)
        FoodModel
            .create(req.body)
            .then(({ _id}) => LocationModel.findOneAndUpdate({_id: req.body.location}, {$push: {foods: _id} }, {new :true}))
            .then(foodData => res.json(foodData))
            .catch(err => res.json(err))
    }, 
    findAllWithFoods: function(req, res) {
        LocationModel
            .find(req.query)
            .populate("foods")
            .then(locationData => res.json(locationData))
            .catch(err => res.status(422).json(err));
    },
}