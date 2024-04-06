import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from './types';

// export async function getCurrentProfile() {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchProfile = async () => {
//              try{    
//             console.log("getCurrentProfile working")
//             const res= await axios.get("http://localhost:5000/api/profile/me");
//             console.log("the res is: ", res.data)
//             dispatch({type: GET_PROFILE ,payload :res.data}) ;
//             console.log("full current profile working")
//         } catch(err){
//             dispatch({type:PROFILE_ERROR , payload:{msg: err.response.statusText, status: err.response.status}});
//             console.log("error  getting full profile", err)
//     }

//         fetchProfile();
//     }}, []);

//     return null; // or you can return JSX if needed
// };


//create or updat a profile

export const   createProfile =(formData)=>async dispatch =>{
  
    console.log("hi")

    try {
        // const navigate = useNavigate()
        const config ={
            headers:{
                'Content-type' :'application/json'
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

//education
export const  addEducation =(education)=>async dispatch =>{
  
    console.log("hi")

    try {
        // const navigate = useNavigate()
        const config ={
            headers:{
                'Content-type' :'application/json'
            }
        }
        console.log("hi again")
        const res = await axios.put('http://localhost:5000/api/profile/education', education,config)
        console.log("The res for education is:",res)
        dispatch({type: UPDATE_PROFILE ,payload :res.data}) ;
        dispatch('EDUCATION ADDED', 'success')
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

//add experience
export const addExperience =(formData) =>async dispatch=>{
    console.log("hi")

    try {
        // const navigate = useNavigate()
        const config ={
            headers:{
                'Content-type' :'application/json'
            }
        }
        console.log("hi for experience")
        const res = await axios.put('http://localhost:5000/api/profile/experiences', formData,config)
        console.log(res.data)
        dispatch({type: UPDATE_PROFILE ,payload :res.data}) ;
        dispatch(setAlert('EXPERIENCE ADDED', 'success'))
       
        // if(!edit){
        //     history.push('/dashboard')
        // }
    } catch (error) {
        dispatch({type:PROFILE_ERROR , payload:{msg: error.response.statusText, status: error.response.status}});
            console.log("error creating profile", error)
        
    }
}


//delete experience
export const deleteExperience= id => async dispatch => {
    try {
       const res =await axios.delete(`http://localhost:5000/api/profile/experience/${id}`); 
       console.log(res)
       dispatch({ type: UPDATE_PROFILE , payload: res.data })
       dispatch(setAlert('Experience Removed','danger'));
   }catch(err) {
       dispatch(setAlert('Failed to remove Experience','danger'));
       dispatch({type: PROFILE_ERROR , payload: err})
   }
}

//delete education
export const deleteEducation= id => async dispatch => {
    try {
       const res =await axios.delete(`http://localhost:5000/api/profile/education/${id}`); 
       console.log(res)
       dispatch({ type: UPDATE_PROFILE , payload: res.data })
       dispatch(setAlert('Education Removed','danger'));
   }catch(err) {
       dispatch(setAlert('Failed to remove Education','danger'));
       dispatch({type: PROFILE_ERROR , payload: err})
   }
}