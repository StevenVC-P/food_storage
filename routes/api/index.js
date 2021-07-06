const router = require("express").Router();
const locationRoutes = require("./locationRoutes");
//const foodRoutes = require("./foodRoutes");

//api/...

router.use("/location", locationRoutes)
//router.use("/food", foodRoutes)

module.exports = router;