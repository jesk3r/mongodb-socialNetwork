const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reactionSchema = new Schema({
  
  reactionBody: {
    type: String,
    require: 'Must have a reaction body'
    //add the defualt value
    //use getter to return a formated time stamp
  },

  username: {
    type: String,
    required: "A username is required",
  },

  //make changes to this to be an array of nested documents created with the reaction schema
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatedTime
  }
  
});

function formatedTime(time){
    //format time somewhere here

    return time.toDateString()
}
  



  
module.exports = reactionSchema;