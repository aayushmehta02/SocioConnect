import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProfileById } from '../../actions/profile';
import NavbarNew from '../layout/NavbarNew';

function Profile({  getProfileById, profile: { company, website, location, user:{name, avatar}}, loading }) {
    const {id} =useParams()
    useEffect(() => {
        
        getProfileById(id);
    }, [getProfileById]);
    return (
        <div>
            <NavbarNew/>
            {profile=== null || loading? "LOADING" : <div className='container'><Link to='/profiles' className='btn btn-light'>BACK TO PROFILES</Link></div>}
            <div class="profile-grid my-1 container">
            <div>
            <div className="profile-top bg-primary p-2">
          <img
            className="round-img my-1"
            src={avatar}
            alt=""
          />
          <h1 className="large">{name}</h1>
          <p className="lead"> {company && <span>at {company}</span> }</p>
          <p>{location && <h3>{location}</h3>}</p>
          <div className="icons my-1">
          {
            website && (
                <a href={website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x"></i>
            </a>
            )
          }
           
           { social && <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>}
            { social && <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>}
            {social && <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>}
             {social && <a href={social.youtube} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x"></i>
            </a>}
           { social &&  <a href={social.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>}
          </div>
          <div className="skills-containaer">
                    <div className="skills">
                        {skills.map((skill, index) => (
                            <div key={index} className="p-1">
                                <i className="fas fa-check" /> {skill}
                            </div>
                        ))}
                    </div>
                </div>
          </div>
          </div>
            

          </div>
        </div>
    );
}


Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const  mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})

export default connect(mapStateToProps, {getProfileById})(Profile)
