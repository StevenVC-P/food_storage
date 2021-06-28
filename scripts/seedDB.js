const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/foodstore");

const locationSeed = [

    {
        locationName:"Cupboards",
    },
    {
        locationName:"Refridgerator",
    },
    {
        locationName:"Freezer",

    }
];

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