import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProfileById } from '../../actions/profile';
import NavbarNew from '../layout/NavbarNew';
import Profiletop from './Profiletop';

function Profile({  getProfileById, profile: { profile, loading}, status }) {
    const {id} =useParams()
    useEffect(() => {
        // Access the id from match.params
       
        // Use id in your logic
        getProfileById(id);
    }, [getProfileById]);
    return (
        <div>
            <NavbarNew/>
            {profile=== null || loading? "LOADING" : <div className='container'><Link to='/profiles' className='btn btn-light'>BACK TO PROFILES</Link></div>}
            <div class="profile-grid my-1 container">
            <Profiletop profile={profile}/>
            

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
