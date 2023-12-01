//
const router = require("express").Router();
// this is importing the user and thought routes
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./though-routes");
// identify the endpoints for the user and thought routes
router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);
// exporting the router
module.exports = router;
