import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteComent } from '../../actions/post'
const Commentitem =({postId, comment: {_id, text, name, avatar, user, date}, auth, deleteComent}) => {
  return (
    <div>
    <div class="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${user}`}>
              <img
                class='round-img'
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p class="my-1">
              {text}
            </p>
             <p class="post-date">
                Posted on {date}
            </p>
            {!auth.loading && user === auth.user._id && (
                <button onClick={e => deleteComent(postId, _id)} type="button" className="btn btn-danger">
                <i className="fas fa-times"></i>
                </button>
            )}
          </div>
        </div>

    </div>
  )
}

Commentitem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComent: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {deleteComent}) (Commentitem)