import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPost } from '../../actions/post';
import NavbarNew from '../layout/NavbarNew';
import Postitem from '../posts/Postitem';
import Commentform from './Commentform';
import Commentitem from './Commentitem';

const Post = ({getPost, post:{post,loading}}) => {
  const {id} = useParams()
  useEffect(()=>{
    getPost(id)
  },[getPost]);
  return loading || post=== null? <h5>LOADING....</h5>:
    <div>
    <NavbarNew/>
    <div className='container'>
    <Link to='/posts' className='btn'>BACK TO POSTS</Link>
    <Postitem post={post}/>
    <Commentform post={post}/>
    <div className='comments'>
      {post.comments.map(comment=>(
        <Commentitem key = {comment._id} comment={comment} postId  = {post._id}/>
      ))}

    </div>
    </div>
    
    </div>
  
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post:PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  post: state.post
})

export default connect(mapStateToProps, {getPost})(Post)