import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function Dashboard() {
  useEffect(() => {
    async   function getCurrentProfile(){
      try{    
          console.log("getCurrentProfile working")
          const res= await axios.get("http://localhost:5000/api/profile/me");
          console.log("the res is: ", res.data)
          secondDispatch({type: GET_PROFILE ,payload :res.data}) ;
          console.log("full current profile working")
      } catch(err){
          secondDispatch({type:PROFILE_ERROR , payload:{msg: err.response.statusText, status: err.response.status}});
          console.log("error  getting full profile", err)
  }}},[])
 
    
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

