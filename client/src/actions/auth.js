import axios from "axios";
import { REGISTER_SUCCESS, REGISTRATION_FAIL } from "./types";



//REGISTER USER

export const register =({name, email,password}) => async dispatch =>{
    const config={
        Headers:{
            'Content-Type':'application/json'
        }
    }
    const  body=JSON.stringify({name,email,password});
    try{
       const res= await axios.post('/api/users',body,config);
       console.log(res.data)
       dispatch({type:REGISTER_SUCCESS , payload : res.data })
     //   dispatch(loadUser())  
      window.location.href='/'
    }catch (err){
         dispatch({ type:REGISTRATION_FAIL ,payload: err.response.msg})
    }
}