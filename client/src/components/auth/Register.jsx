import axios from 'axios';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux'; // Import useDispatch
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4
import { loadUser, setAuthToken } from '../../actions/auth';
import { REGISTER_FAIL, REGISTER_SUCCESS, REMOVE_ALERT, SET_ALERT } from '../../actions/types'; // Import SET_ALERT action type
import Alert from '../layout/Alert';

export const Register = () => {
    const dispatch = useDispatch(); // Get the dispatch function
    const newDispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

    function onChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (password !== password2) {
            dispatchAlert('Enter a new password', 'danger'); // Call dispatchAlert instead of newAlert


        } else {

            register({ name, email, password }, "Registration is successful");  //
            if(localStorage.token){
                setAuthToken(localStorage.token);
                console.log(localStorage.token)
                
                
              }

            // try {
            //     const newUser = { name, email, password };
            //     if (!name || !email || !password) {
            //         throw new Error("Name, email, and password are required");
            //     }
            //     const config = { headers: { 'Content-Type': 'application/json' }};
            //     const body = JSON.stringify(newUser);
            //     const res = await axios.post('http://localhost:5000/api/users', body, config);
            //     console.log(res);
            // } catch (error) {
            //     console.error('Error:', error.message);
            // }
        }
    }

    // Define a dispatchAlert function to dispatch the alert action
    function dispatchAlert(msg, alertType) {
        const id = uuidv4();
        dispatch({
            type: SET_ALERT,
            payload: { msg, alertType, id }
        });

        setTimeout(()=> dispatch({ type: REMOVE_ALERT, payload: id}), 4000)
    }
    //user register

    async function register({ name, email, password }) {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        const body = JSON.stringify({ name, email, password });
        console.log(body)
        dispatch(loadUser())
        try {
            const res = await axios.post('http://localhost:5000/api/users', body, config);
            console.log(res.data)
          
            console.log(res)
            newDispatch({ type: REGISTER_SUCCESS,  payload: res.data});
            navigate('/dashboard');
        } catch (err) {
            console.log(err)
    
            if (err) {
                newDispatch({ type: REGISTER_FAIL });
                // err.forEach(error => dispatch(dispatchAlert(error.msg, 'danger')));
                
            }
    
            newDispatch({ type: REGISTER_FAIL, payload: err });
        }



    }
    
  
    
  

    return (
        <div>
            <Alert/>
            <section className="container">
                <h1 className="large text-primary">Sign Up</h1>
                <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Name" name="name" required value={name} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" name="email" required value={email} onChange={onChange} />
                        <small className="form-text">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" name="password" minLength="6" required value={password} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Confirm Password" name="password2" minLength="6" required value={password2} onChange={onChange} />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
            </section>
        </div>
    );
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})
export default  connect(mapStateToProps , { loadUser })(Register)
