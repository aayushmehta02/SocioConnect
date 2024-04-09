import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLikes, deletePost, removeLikes } from '../../actions/post';

function Postitem({auth, post:{_id, text, name, avatar, user, likes, comments, date}, addLikes, removeLikes, deletePost}) {
  return (
    <div className="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${user}`}>
              <img
                className="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p className="my-1">
              {text}
            </p>
             <p className="post-date">
                Posted on {date}
            </p>
            <button type="button" className="btn btn-light" onClick={e => addLikes(_id)}>
              <i className="fas fa-thumbs-up"></i>
              <span>{likes.length}</span>
            </button>
            <button type="button" className="btn btn-light" onClick={e => removeLikes(_id)}>
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${_id}`} className="btn btn-primary">
              Discussion <span className='comment-count'>{comments.length}</span>
            </Link>
            {
                !auth.loading && user === auth.user._id && (
                    <button     onClick={e=> deletePost(_id)} 
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times"></i>
          </button>
                )
            }
           
          </div>
        </div>

  )
}

Postitem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
    auth : state.auth
})
export default connect(mapStateToProps, {addLikes, removeLikes,deletePost})(Postitem)
