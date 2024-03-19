import axios from "axios";
import { REGISTER_FAIL, REGISTER_SUCCESS } from "./types";

import { setAlert } from './alert';

//REGISTER USER

export const register =({name, email,password}) => async dispatch =>{
    const config={
        Headers:{
            'Content-Type':'application/json'
        }
    }
    const  body=JSON.stringify({name,email,password});
    try{
       const res= await axios.post('/api/users', body, config);
       console.log(res.data)
       dispatch({type:REGISTER_SUCCESS , payload : res.data })
   
    }catch (err){
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
                
            };
        }
         dispatch({ type:REGISTER_FAIL})
    }
