import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_PROFILE, PROFILE_ERROR } from './types';

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


