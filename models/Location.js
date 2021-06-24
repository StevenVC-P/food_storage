const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    locationName: {
        type: String,
        require: true
    }
})

const LocationModel = mongoose.model("Location", locationSchema);

module.exports = LocationModel;