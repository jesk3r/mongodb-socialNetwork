const mongoose = require('mongoose');

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
    //add the defualt value
    //use getter to return a formated time stamp
  },

  username: {
    type: String,
    required: "A username is required",
  },

  //make changes to this to be an array of nested documents created with the reaction schema
  reactions: [{type: Schema.Types.ObjectId, ref:'User'}]
  
});
  

const Thought = mongoose.model('Thought', thoughtSchema)

  
module.exports = Thought;