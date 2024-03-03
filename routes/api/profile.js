const express = require('express')
const router = express.Router();

// GET api/users
router.get('/',(req,res)=> res.send("profile route"));


module.exports= router;