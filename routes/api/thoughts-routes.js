const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  updateThought
  } = require('../../controllers/thoughts-controller');

//Get all thoughts
// /api/users
router.route("/")
.get(getAllThoughts);


// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

module.exports = router;
