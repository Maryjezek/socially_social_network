const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,

} = require("../../controllers/user-controller");

// /api/users
router.route("/")
.get(getAllUsers)
.post(createUser);

// /api/users/:id
router.route("/:id")
.get(getUserById)
.put(updateUser)
.delete(deleteUser);


router.route("/:id/friends/:friendId")
.post(createFriend)
.delete(deleteFriend);


module.exports = router;

