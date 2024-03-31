import React from 'react';
import { connect } from 'react-redux';

function Dashboard() {

 
    
  return (
    <div>Dashboard</div>
  )
}

// Dashboard.propTypes={
//   getCurrentProfile: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps)(Dashboard)

