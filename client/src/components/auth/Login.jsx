import axios from 'axios';
import { React, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { loadUser } from '../../actions/auth';
import { GET_PROFILE, LOGIN_FAIL, LOGIN_SUCCESS, PROFILE_ERROR } from '../../actions/types'; // Import SET_ALERT action type

export const Login = () => {
    const newDispatch = useDispatch()
    const dispatch = useDispatch()
    const  secondDispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })



    const {name, email, password, password2} = formData

     function onChange(e){
        setFormData({...formData,[e.target.name] : e.target.value})
        
    } 

    async function onSubmit(e){
        e.preventDefault()
      
           

           try {
            
            login(email,password)
            
           } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.log('Error', error.message);
            }
           }
        
    }
    //get profiles
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
    }}
   


    //login user
    async function login(email, password) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        console.log("login working 1")
        const body = JSON.stringify({ email, password });
        console.log("login working 2")
        try {
            const res = await axios.post('http://localhost:5000/api/auth', body, config);
            console.log(res.data);
            
            newDispatch({ type: LOGIN_SUCCESS, payload: res.data });
            dispatch(loadUser());
             console.log(" login working 3")
           
                navigate('/profile');
                console.log("login working 4")
                getCurrentProfile();
                console.log("login working5")
            
             
        } catch (err) {
            console.error(err.response.data);
            
            // Send only one response here
            newDispatch({ type: LOGIN_FAIL, payload: err.response.data });
            
        }
    }
    
    
  return (
    <div>
    <section className="container">
<h1 className="large text-primary">Log In</h1>

<form className="form" onSubmit={e => onSubmit(e)}>

<div className="form-group">
 <input type="email" placeholder="Email Address" name="email" required value={email} onChange={e=> onChange(e)} />

</div>
<div className="form-group">
 <input
   type="password"
   placeholder="Password"
   name="password"
   minLength="6"
   required value={password} onChange={e=> onChange(e)}
 />
</div>

<input type="submit" className="btn btn-primary" value="Login" />
</form>
<p className="my-1">
Don't have an account? <Link to={'/register'}>Sign Up</Link>
</p>
</section>
</div>
  )
}



const mapStateToProps = state =>({
    isAuthenticate: state.auth.isAuthenticated
})
export default  connect(mapStateToProps , { loadUser })(Login)