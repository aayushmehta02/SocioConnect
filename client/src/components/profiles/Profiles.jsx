import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProfiles } from '../../actions/profile'
import NavbarNew from '../layout/NavbarNew'
import Profileitem from '../profiles/Profileitem'
function Profiles({getProfiles, profile: {profiles, loading}}) {
    useEffect(()=>{
        getProfiles()
    }, [])
  
  return (
    <div>
    <NavbarNew/>
    <div className='container'>
    <h1 className='large text-primary'>Developers</h1>
    <p className='leads'>
        <i className='fab fa-connectdevelop' /> Browse and Connect with Developers
      </p>
    <div className='profiles'>
        {profiles.length> 0 ? (
            profiles.map(profile =>(
                <Profileitem key={profile._id} profile={profile}/>
            ))
        ) : <h4>No profiles found.....</h4>} 
    </div>
    </div>
    </div>
  )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
    profile: state.profile
})
export default connect(mapStateToProps, {getProfiles})(Profiles)
