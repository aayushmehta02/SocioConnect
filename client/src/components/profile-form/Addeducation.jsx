import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import NavbarNew from '../layout/NavbarNew';
function Addeducation({addEducation}) {
  const [education, setEducation] = useState({
    school:'',
    degree: '',
    fieldofstudy: '' ,
    from: '',
    to: '',
    current: '',
    description:''
  })
  const {
    school,
    degree,
    fieldofstudy,
    from,
    current,
    to,
    description
  } = education

  const onChange = e => setEducation({...education, [e.target.name]:e.target.value})

  const onSubmit =e =>{
    e.preventDefault()
    console.log(education)
    addEducation(education)
  }

  return (
    <div>
    <NavbarNew/>
    <section className="container">
      <h1 className="large text-primary">
        Add Your Education
      </h1>
      <p className="lead">
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
        you have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            required
            value={school} onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            required
            value={degree} onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Field Of Study" name="fieldofstudy" value={fieldofstudy} onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from"  value={from} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
          <p>
            <input type="checkbox" name="current"  value={current} onChange={e => onChange(e)}/> Current School or Bootcamp
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to"  value={to} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description} onChange={e => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </section>
    </div>
  )
}

Addeducation.propTypes = {
  addEducation :PropTypes.func.isRequired
}

export default connect(null, {addEducation})(Addeducation)
