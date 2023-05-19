const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET ALL POSTS
router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

// GET A SPECIFIC POSTS
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

// CREATE A  POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(401).json({ message: err });
    }
});

// DELETE A POST
router.delete('/:postId', async (req, res) => {
    try {
      const post = await Post.deleteOne({ _id: req.params.postId });
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  });
  
//UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try {
      const post = await Post.updateOne({ _id: req.params.postId }, {$set: {title: req.body.title}});
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  });



module.exports = router;