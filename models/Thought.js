const mongoose = require('mongoose');
const reactionSchema = require('./Reaction')

var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: "Some Text is required",
    unique: true,
    trim: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
    get: formatedTime
  },

  username: {
    type: String,
    required: "A username is required",
  },

  //make changes to this to be an array of nested documents created with the reaction schema
  reactions: [reactionSchema],
  
}, { toJSON: { virtuals: true } } );
  
function formatedTime(time){
  //format time somewhere here
  console.log(time)
  return time.toDateString()
}

const virtual = thoughtSchema.virtual('reactionsCount')

virtual.get(function() {
  return this.reactions.length
})


const Thought = mongoose.model('Thought', thoughtSchema)

  
module.exports = Thought;