import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';

import { useNavigate } from 'react-router-dom';
export async function getCurrentProfile() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProfile = async () => {
             try{    
            console.log("getCurrentProfile working")
            const res= await axios.get("http://localhost:5000/api/profile/me");
            console.log("the res is: ", res.data)
            dispatch({type: GET_PROFILE ,payload :res.data}) ;
            console.log("full current profile working")
        } catch(err){
            dispatch({type:PROFILE_ERROR , payload:{msg: err.response.statusText, status: err.response.status}});
            console.log("error  getting full profile", err)
    }

        fetchProfile();
    }}, []);

    return null; // or you can return JSX if needed
};


//create or updat a profile

export const   createProfile =(formData)=>async dispatch =>{
  
    console.log("hi")

    try {
        const navigate = useNavigate()
        const config ={
            headers:{
                'Contect-type' :'application/json'
            }
        }

        const res = await axios.post('http://localhost:5000/api/profile', formData,config)
        dispatch({type: GET_PROFILE ,payload :res.data}) ;
        dispatch(setAlert(edit? 'Profile updated' : 'Profile created'))
        if(res.data){
            navigate('/dashboard')
        }
        // if(!edit){
        //     history.push('/dashboard')
        // }
    } catch (error) {
        dispatch({type:PROFILE_ERROR , payload:{msg: error.response.statusText, status: error.response.status}});
            console.log("error creating profile", error)
        
    }

}

