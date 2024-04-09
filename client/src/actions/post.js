import axios from 'axios'
import { setAlert } from './alert'
import { ADD_COMMENT, ADD_POST, DELETE_POST, GET_POST, GET_POSTS, POST_ERROR, REMOVE_COMMENT, UPDATE_LIKES } from './types'

//GET POSTS
export const getPosts= ()=> async dispatch =>{
    try {
        const res = await axios.get('http://localhost:5000/api/posts')
        console.log(res)
        dispatch({type: GET_POSTS, payload:res.data})
        dispatch(setAlert("POSTS Loaded",'success'))
    } catch (error) {
        dispatch({type: POST_ERROR ,payload : error})
        dispatch(setAlert('Server Error', 'dark'))
        console.log("error for get POSTS is:", error)
    }
}


export const addLikes= (id)=> async dispatch =>{
    try {
        const res = await axios.put(`http://localhost:5000/api/posts/like/${id}`)
        console.log(res)
        dispatch({type: UPDATE_LIKES, payload:{id, likes: res.data}})
        dispatch(setAlert("likes Loaded",'success'))
    } catch (error) {
        dispatch({type: POST_ERROR ,payload : error})
        dispatch(setAlert('Server Error', 'dark'))
        console.log("error for get POSTS is:", error)
    }
}

export const removeLikes= (id)=> async dispatch =>{
    try {
        const res = await axios.put(`http://localhost:5000/api/posts/unlike/${id}`)
        console.log(res)
        dispatch({type: UPDATE_LIKES, payload:{id, likes: res.data}})
        dispatch(setAlert("unlike Loaded",'success'))
    } catch (error) {
        dispatch({type: POST_ERROR ,payload : error})
        dispatch(setAlert('Server Error', 'dark'))
        console.log("error for get POSTS is:", error)
    }
}
//DELETE POST
export const deletePost= (id)=> async dispatch =>{
    try {
        const res = await axios.delete(`http://localhost:5000/api/posts/${id}`)
        console.log(res)
        dispatch({type: DELETE_POST, payload:{id, payload: id}})
        dispatch(setAlert("POSTS deleted",'success'))
    } catch (error) {
        dispatch({type: POST_ERROR ,payload : error})
        dispatch(setAlert('Server Error', 'dark'))
        console.log("error for get POSTS is:", error)
    }
}


//ADD POST
export const addPost= (formData)=> async dispatch =>{
    const config={
        headers:{
            'Content-Type' :  'application/json'
        }
    }
    console.log('hi')
    try {
        const res = await axios.post(`http://localhost:5000/api/posts`, formData, config)
        console.log(res)
        dispatch({type: ADD_POST, payload:res.data})
        dispatch(setAlert("POSTS created",'success'))
    } catch (error) {
        dispatch({type: POST_ERROR ,payload : error})
        dispatch(setAlert('Server Error', 'dark'))
        console.log("error for get POSTS is:", error)
    }
}



export const getPost= id=> async dispatch =>{
    try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`)
        console.log(res)
        dispatch({type: GET_POST, payload:res.data})
        dispatch(setAlert("POSTS Loaded",'success'))
    } catch (error) {
        dispatch({type: POST_ERROR ,payload : error})
        dispatch(setAlert('Server Error', 'dark'))
        console.log("error for get POST is:", error)
    }
}

//ADD comment
export const addComent = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        // Make sure formData is in JSON format
        const jsonData = JSON.stringify(formData);

        const res = await axios.post(`http://localhost:5000/api/posts/comment/${postId}`, jsonData, config);
        dispatch({ type: ADD_COMMENT, payload: res.data });
        dispatch(setAlert("Comment created", "success"));
    } catch (error) {
        // More specific error handling
        if (error.response) {
            // Server responded with an error status code
            dispatch({ type: POST_ERROR, payload: error.response.data });
            dispatch(setAlert("Server Error", "dark"));
        } else if (error.request) {
            // The request was made but no response was received
            console.log("No response received:", error.request);
            dispatch(setAlert("No response received from server", "dark"));
        } else {
            // Other errors
            console.log("Error:", error.message);
            dispatch(setAlert("Error occurred", "dark"));
        }
    }
};


//delete comment
export const deleteComent= (postId, commentId)=> async dispatch =>{
   
    console.log('hi')
    try {
        const res = await axios.delete(`http://localhost:5000/api/posts/comment/${postId}/${commentId}`)
        console.log(res)
        dispatch({type: REMOVE_COMMENT, payload:commentId})
        dispatch(setAlert("comment deleted",'success'))
    } catch (error) {
        dispatch({type: POST_ERROR ,payload : error})
        dispatch(setAlert('Server Error', 'dark'))
        console.log("error for get POSTS is:", error)
    }
}