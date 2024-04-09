import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../../actions/post';
import NavbarNew from '../layout/NavbarNew';

const Post = ({getPost, post:{post,loading}}) => {
  const {id} = useParams()
  useEffect(()=>{
    getPost(id)
  },[getPost]);
  return (
    <div>
    <NavbarNew/>
    Post
    </div>
  )
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post:PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  post: state.post
})

export default connect(mapStateToProps, {getPost})(Post)