const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

//getting back all the posts 
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
})

//submits a post
router.post('/', async (req, res) => {
     const post = new Post({
         title: req.body.title,
         description: req.body.description
     });
     try{
        const savedPost = await post.save();
        res.json(savedPost);
     } catch(err) {
         res.json({message: err});
     }
    
});
//get back a specific post

module.exports = router;