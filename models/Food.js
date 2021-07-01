const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    foodName: {
        type: String,
        require: true
    },
    foodAmount: {
        type: Number,
        require: true,
    },
    amountType:{
        type: String,
        require: true
    }
})

const FoodModel = mongoose.model("Food", foodSchema);

module.exports = FoodModel;