import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/post'
import NavbarNew from '../layout/NavbarNew'
import Postform from './Postform'
import Postitem from './Postitem'

function Posts({getPosts,post: {posts, loading}}) {
    useEffect(() => {
        getPosts()
    },[getPosts])
  return (
    <div>
    <NavbarNew/>
    <Postform/>
    <section className='container'>
      <h1 className='large text-primary'>POSTS</h1>
      <p className='lead'>
        <i className='fab fa-connectdevelop' /> Welcome to the community 
      </p>
      
      
      
      {loading ? <span>Loading...</span> : (
          posts.map(post=>(
            <Postitem  key={post._id} post={post}/>
           
          ))
      )}
    </section>
    
    </div>
  )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)
