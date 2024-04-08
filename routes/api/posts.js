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
            console.error(error.message);
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
        console.log(post)

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await post.remove;

    res.json({ msg: 'Post removed' });

    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }
    
})


// @route    PUT api/posts/like/:id
// @desc     Like a post
// @access   Private
router.put('/like/:id', auth,  async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      // Check if the post has already been liked
      if (post.likes.some((like) => like.user.toString() === req.user.id)) {
        return res.status(400).json({ msg: 'Post already liked' });
      }
      
      post.likes.unshift({ user: req.user.id });
      console.log(post)
      await post.save();
  
      return res.json(post.likes);
    
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server Error');
    }
  });
  
  // @route    PUT api/posts/unlike/:id
  // @desc     Unlike a post
  // @access   Private
  router.put('/unlike/:id', auth, async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      // Check if the post has not yet been liked
      if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
        return res.status(400).json({ msg: 'Post has not yet been liked' });
      }
  
      // remove the like
      post.likes = post.likes.filter(
        ({ user }) => user.toString() !== req.user.id
      );
  
      await post.save();
  
      return res.json(post.likes);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

//POST api/comments/:id

router.post(
    '/comment/:id',
    [
        auth,
    [
        check('text', 'text is required').not().isEmpty()
    ]
    ],
    async(req,res)=>{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

        try {
            const user = await User.findById(req.user.id)
            const post = await Post.findById(req.params.id)
            
            const newComment= {
                text: req.body.text,
                name: user.name,
                avatar: user. avatar,
                user: req.user.id
            };
            post.comments.unshift(newComment)
            console.log(post.comments)
            await post.save()
            res.json(post.comments)



        } catch (error) {
            console.log(error.message);
            res.status(500).send(error.message);
        }
    }

)


//delete comment
//DELETE api/posts/comment/:id/:comment_id
router.delete('/comment/:id/:comment_id', auth,
async(req,res)=>{
    try {
        const post  = await Post.findById(req.params.id)
        const comment = post.comments.find(comment=> comment.id === req.params.comment_id)
        if(!comment){
            return res.status(404).json({msg: "comment does not exist"})
        }
        if(comment.user.toString() !== req.user.id){
            return res.status(401).json({msg: "User not auhtorized"})
        }
        //remove index
        const removeIndex = post.comments.map(comment=> comment.user.toString()).indexOf(req.user.id)
        post.comments.splice(removeIndex,1)
        await post.save()
        res.json(post.comments)
       
    } catch (error) {
        console.log(error.message);
            res.status(500).send(error.message);
    }
})
module.exports = router;