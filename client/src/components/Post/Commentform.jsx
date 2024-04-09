import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addComent } from '../../actions/post'
const Commentform = ({addComent, post: {_id}}) => {
    const [text, setText] = useState('')
  return (
    <div className="post-form container">
    <div className="bg-primary p">
      <h3>Leave a comment...</h3>
    </div>
    <form className="form my-1" onSubmit={e => {
        e.preventDefault()
        addComent(_id, {text})
        setText('')
    }}>
      <textarea
        name="text"
        cols="30"
        rows="5"
        placeholder="Create a comment"
        value={text}
        onChange={e => setText(e.target.value)}
        required
      ></textarea>
      <input type="submit" className="btn btn-dark my-1" value="Submit" />
    </form>
  </div>
  )
}

Commentform.propTypes = {
    addComent: PropTypes.func.isRequired
}

export default connect(null, {addComent})(Commentform)