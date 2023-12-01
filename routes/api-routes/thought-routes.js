// we are importing the important dependencies and controllers
const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  deleteThought,
  updateThoughtById,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");
// routes for GET and POST
router.route("/").get(getAllThoughts).post(createThought);
// tells the routes for GET,PUT AND DELETE thoughts
router
  .route("/:thoughId")
  .get(getThoughtsById)
  .put(updateThoughtById)
  .delete(deleteThought);

// route for POST reaction to a thought
router.route("/:thoughtId/reactions").post(createReaction);
// route for delete reaction to a thought
router, route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
// Exporting the router
module.exports = router;
