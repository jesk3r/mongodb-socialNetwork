const { User } = require('../models');

module.exports = {
  async getAllUser(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.postId });

      !user
        ? res.status(404).json({ message: 'No post with that ID' })
        : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new post
  async postNewUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res){
    try{
        filter = {_id: req.body._id}
        update = { username: req.body.username, email: req.body.email}

        const user = await User.findOneAndUpdate(filter, update)
        res.json(user)
    }catch (err){
        console.log(err)
        res.status(500).json(err)
    }
  },
  async deleteUser(req,res){
    try{
        const del = await User.findByIdAndDelete({_id: req.body._id})

        res.json(del)
    }catch (err){
      console.log(err)  
      res.status(500).json(err);
    }
  },

  async postNewFriend(req, res){
    try{
       console.log('post friend')
        const user = await User.findOne({_id: req.params.userId})

        user.friends.push(req.params.friendsId)

        await user.save()

        res.json(user)
    }catch (err){
        res.status(500).json(err)
    }
  },

  async delFriend(req, res){
    try{
        const user = await User.findOne({_id: req.params.userId})

        user.friends.pull(req.params.friendsId)

        await user.save()

        res.json(user)
    }catch(err){

    }
  },
};
