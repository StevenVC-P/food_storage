const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/foodstore");

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

// const foodSeed =[
//     {
//         foodName:"Apples",
//         foodAmount:"5",
//         amountType:"ea",
//     },
//     {
//         foodName:"Campbel's Chicken Noodle Soup",
//         foodAmount:"3",
//         amountType:"ea",
//     },
//     {
//         foodName:"Eggs",
//         foodAmount:"12",
//         amountType:"ea",
//     },
//     {
//         foodName:"Chicken Breasts",
//         foodAmount:"3",
//         amountType:"lbs",
//     }

// ]

db.LocationModel.remove({})
    .then(() => db.LocationModel.collection.insertMany(locationSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// db.FoodModel.remove({})
//     .then(() => db.FoodModel.collection.insertMany(foodSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });