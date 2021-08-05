const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    locationName: {
        type: String,
        require: true
    },
    foods: [
        {
            type: Schema.Types.ObjectId,
            ref: "foodModel"
        }
    ]
})

const locationModel = mongoose.model("Location", locationSchema);

module.exports = locationModel;