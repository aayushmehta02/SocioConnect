import axios from 'axios'
import { setAlert } from './alert'
import { ADD_POST, DELETE_POST, GET_POST, GET_POSTS, POST_ERROR, UPDATE_LIKES } from './types'

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