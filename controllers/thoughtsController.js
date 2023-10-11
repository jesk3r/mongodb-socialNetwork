const { Thought, User } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },

  async getSingleThought(req, res) {
    try {
      const thoughts = await Thought.findOne({ _id: req.params.id });
        console.log(req.params.id)
      !thoughts
        ? res.status(404).json({ message: 'No post with that ID' })
        : res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async postNewThougth(req, res) {
    try {
        const thought = await Thought.create(req.body);
        const user = await User.findOne({username: req.body.username})
        // console.log(user.thoughts)
        user.thoughts.push(thought._id)

        await user.save()
        
        // const user = await Thought.findOneAndUpdate({username: req.body.username}, {$addToSet: {thoughts: thought._id}})
        console.log('new though posted')
        //update the users Thought array
        res.json(thought);
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
    }
  },

  // update thought
  async updateThought(req, res) {
    try {
      filter = {_id:  req.body._id}
      update = req.body
    
      const thoughts = await Thought.findOneAndUpdate(filter, update);
      
      res.json(thoughts)
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const post = await Thought.deleteOne({_id: req.body._id});
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async postReaction(req, res){
    try{
        //{_id: req.body._id}
        const thought = await Thought.findOne({_id: req.body._id})
        // console.log(thought.push())
        thought.reactions.push(req.body.reaction)
        const t = await thought.save()
        //console.log(thought.reaction)
        res.json(thought)
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
  },

  async delReaction(req, res){
    try{
        
        const thought = await Thought.findOne({_id: req.params.thoughtsID})

        console.log(thought)
        thought.reactions.pull(req.body._id)
        await thought.save()
        res.json(thought)
    }catch(err){
        res.status(500).json(err);
    }
  },

};
