const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  postNewThougth,
  updateThought,
  deleteThought,
  postReaction,
  delReaction
} = require('../../controllers/thoughtsController.js');

// /api/thoughts
router.route('/')
.get(getThoughts)
.post(postNewThougth)
.put(updateThought)
.delete(deleteThought);

// api/thoughts/:id
router.route('/:id')
.get(getSingleThought)

// /api/thoughts/:thoughtsID/reactions
router.route('/:thoughtsID/reactions')
.post(postReaction)
.delete(delReaction);

module.exports = router;
