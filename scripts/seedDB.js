const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/foodstore",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false  
    });

const locationSeed = [
    {
        locationName:"Cupboards",
        foods: []
    },
    {
        locationName:"Refridgerator",
        foods: []
    },
    {
        locationName:"Freezer",
        foods: []
    }
];

const foodSeed = [
    {
        foodName: "Apple",
        foodAmount: 5,
        amountTypr: "each"
    },
    {
        foodName: "Banana",
        foodAmount: 8,
        amountTypr: "each"
    }
];


async function init(){

    await db.LocationModel.deleteMany({})
            .then(() => db.LocationModel.collection.insertMany(locationSeed))
            .then(data => {
                console.log(data.result.n + " location records inserted!");
            })
            .catch(err => {
                console.error(err);
            });

    await db.FoodModel.deleteMany({})
        .then(() => db.FoodModel.collection.insertMany(foodSeed))
        .then(async data => {
            for (let i = 0; i < data.ops.length; i++){
                console.log(data.ops[i]._id)
                let foodId = data.ops[i]._id
                await db.LocationModel.collection.findOneAndUpdate({locationName: "Freezer"}, {$push: {foods:foodId}})
            }
            console.log(data.result.n + " food records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        })

}

init ()