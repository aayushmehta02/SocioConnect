// import React from 'react';
// import { connect } from 'react-redux';
// import { Route, useNavigate } from 'react-router-dom';
// const navigate = useNavigate
// export const PrivateRoute = ({component: Component, auth:{isAuthenticated}, ...rest}) => (
//   <Route {...rest} render={props=> !isAuthenticated? (navigate('/login')):( <Component {...props}/>)}/>
// )


// const mapStateToProps = state =>({
//     auth: state.auth 
// })

// export default connect(mapStateToProps)(PrivateRoute)