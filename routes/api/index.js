const router = require("express").Router();
const locationRoutes = require("./locationRoutes");

router.use("/location", locationRoutes)

module.exports = router;