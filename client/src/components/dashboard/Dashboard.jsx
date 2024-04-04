import axios from 'axios'; // Import axios
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NavbarNew from '../layout/NavbarNew';
import DashboardActions from './DashboardActions';
import Education from './Education';
import Experience from './Experience';
function Dashboard({ auth: { user }, profile: { profile } }) {
  const secondDispatch = useDispatch(); // Add secondDispatch for dispatching actions

  useEffect(() => {
    async function getCurrentProfile() {
      try {
        console.log("getCurrentProfile working");
        const res = await axios.get("http://localhost:5000/api/profile/me");
        console.log("the res is: ", res.data);
        secondDispatch({ type: 'GET_PROFILE', payload: res.data }); // Dispatch action
        console.log("full current profile working");
      } catch (err) {
        secondDispatch({ type: 'PROFILE_ERROR', payload: { msg: err.response.statusText, status: err.response.status } });
        console.log("error getting full profile", err);
      }
    }
    getCurrentProfile();
  }, []); // Include secondDispatch in the dependencies array

  return (
    <div >
    <NavbarNew />
    <section className="container" >
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <DashboardActions />
           <Experience experience={profile.experience} />
          <Education education={profile.education} /> 

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </section>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps)(Dashboard);
