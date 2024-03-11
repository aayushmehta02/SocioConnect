const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');


//

// POST api/posts
// Create a post

router.post(
    '/',[auth,
    [
        check('text', 'text is required').not().isEmpty()
    ]],
    async(req,res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        try {
            const user = await User.findById(req.user.id).select('-password')
            const newPost = new Post({
                text: req.body.text,
                name: user.name,
                avatar: user.avatar,
                user: req.user.id

            })

            const post = await newPost.save()
            console.log(post)
            res.json(post)
        } catch (error) {
            console.error(err.message);
        res.status(500).send('Server Error');
        }
    }

)


//get api/posts
//get all posts

router.get('/', async(req,res)=>{
    try {
        const posts = await Post.find().sort({date: -1})
        res.json(posts)
        console.log(posts)
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//get api/posts/:id
//get a single post by id

router.get('/:id', auth, async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)

        if(!post){
            res.status(404).json({msg: 'Post not found'})
        }
        res.json(post)
    } catch (error) {
        console.error(error.message);

        if(error.kind === 'ObjectId'){
            res.status(404).json({msg: 'Post not found'})
        }
        res.status(500).send('Server Error');
    }
})


//DELETE api/posts/:id

router.delete('/:id', auth, async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await post.remove();

    res.json({ msg: 'Post removed' });

    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }
    
})


//put api/posts/like/:id
//like a post
router.put('/like/:id', auth, async(res,req)=>{
    try {
        const post = await Post.findById(req.params.id)

        //check if post has already been liked

        if(post.likes.filter(like => like.user.toString()===req.user.id).length>0){
            return res.status(400).json({msg: 'Post already liked'})
        }


        post.likes.unshift({user: req.user.id})

        await post.save()

        res.json(post.likes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})
module.exports = router;