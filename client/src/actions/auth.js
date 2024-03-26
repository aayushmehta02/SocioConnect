import axios from "axios";
import { AUTH_ERROR, LOGOUT, USER_LOADED } from '../actions/types'; // Import SET_ALERT action type
// import { setAlert } from './alert';

// //REGISTER USER

// export const register =({name, email,password}) => async dispatch =>{
//     const config={
//         Headers:{
//             'Content-Type':'application/json'
//         }
//     }
//     const  body=JSON.stringify({name,email,password});
//     try{
//        const res= await axios.post('/api/users', body, config);
//        console.log(res.data)
//        dispatch({type:REGISTER_SUCCESS , payload : res.data })
   
//     }catch (err){
//         const errors = err.response.data.errors

//         if(errors){
//             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
                
//             };
//         }
//          dispatch({ type:REGISTER_FAIL})
//     }



    //set auth token user
    export const setAuthToken = token =>{
        if(token){
            axios.defaults.headers.common['x-auth-token']=token;
        }else{
            delete axios.defaults.headers.common['x-auth-token'];
        }
    }

    //load user
    export const  loadUser = ()=>async dispatch=>{
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }

        try {
            const res = await axios.get('http://localhost:5000/api/auth')
            console.log(res)
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
            console.log('user loaded')
        } catch (error) {
            console.log(error)
            dispatch({type: AUTH_ERROR})
            
        }
    }
    //login user
    export const  login = ()=>async dispatch=>{

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        const body = JSON.stringify({ email, password });
        console.log(body)
    
        try {
            const res = await axios.post('http://localhost:5000/api/auth', body, config);
            console.log(res.data)
          
            console.log(res)
            dispatch(loadUser)
            dispatch({ type: LOGIN_SUCCESS,  payload: res.data});
            
            if(res.data){
                navigate('/dashboard')
            }
            
        } catch (err) {
            console.log(err)
    
            if (err) {
                dispatch({ type: LOGIN_FAIL });
                // err.forEach(error => dispatch(dispatchAlert(error.msg, 'danger')));
                
            }
    
            dispatch({ type: LOGIN_FAIL, payload: err.response.body.msg });
        }
    }


    //logout
    export const logOut =()=> async dispatch =>{
      
      localStorage.removeItem("token")
      setAuthToken(false);
      dispatch(clearErrors())
      dispatch({type: LOGOUT});
   }; 