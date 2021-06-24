const { LocationModel } = require('../models')

module.exports = {
    findAll: function(req, res) {
        LocationModel
        .find(req.query)
        .then(locationData => res.json(locationData))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        LocationModel
            .findById(req.params.id)
            // .populate("comments")
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
}