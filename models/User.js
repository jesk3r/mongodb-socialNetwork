const mongoose = require('mongoose');

var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "A username is required",
    unique: true,
    trim: true,
  },

  email: {
    type: String,
    required: "Email address is required",
    unique: true,
    match: [regex, "Please fill a valid email address"],
  },

  thoughts: [{type: mongoose.Types.ObjectId, ref:'Thought'}],

  friends: [{type: mongoose.Types.ObjectId, ref:'User'}]
}, { toJSON: { virtuals: true } });
  
const virtual = userSchema.virtual('friendCount')

virtual.get(function() {
  return this.friends.length
})

// return this.friends.length;

const User = mongoose.model('User', userSchema)

  
module.exports = User;