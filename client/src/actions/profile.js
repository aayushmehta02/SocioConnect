// import axios from "axios";
// import { GET_PROFILE, PROFILE_ERROR } from "./types";


// //get current users profile
//  export const getCurrentProfile = ()=> async dispatch =>{
//     try{
//         console.log("getCurrentProfile working")
//         const res= await axios.get("http://localhost:5000/api/profile/me");
//         console.log("the res is: ", res)
//         dispatch({type: GET_PROFILE ,payload :res.data}) ;
//     } catch(err){
//         dispatch({type:PROFILE_ERROR , payload:{msg: err.response.statusText, status: err.response.status}});
// }}