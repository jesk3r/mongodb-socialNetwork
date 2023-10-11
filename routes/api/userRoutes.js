const router = require('express').Router();
const {
  getAllUser,
  getSingleUser,
  postNewUser,
  updateUser,
  deleteUser,
  postNewFriend,
  delFriend,
} = require('../../controllers/userControllers.js');

//use url quary to get id 
// /api/users
router.route('/')
.get(getAllUser)
.post(postNewUser)
.put(updateUser)
.delete(deleteUser);

router.route('/:id')
.get(getSingleUser)

// /api/users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendsId')
.post(postNewFriend)
.delete(delFriend);

module.exports = router;
