import {
    CLEAR_PROFILE,
    GET_PROFILE,
    GET_PROFILEBYID,
    GET_PROFILES,
    GITHUB_REPOS,
    PROFILE_ERROR,
    UPDATE_PROFILE
} from "../actions/types";


const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PROFILE:
        case UPDATE_PROFILE:
        
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case GET_PROFILES:
            return{
                    ...state,  
                    profiles: payload,  //add to existing state instead of replacing it [...state.profiles,payload]
                    loading:false
            }
        case GITHUB_REPOS:
            return{
                ...state,
                repos: payload,
                loading:false,
                
            }
        case GET_PROFILEBYID:
            return{
                ...state,
                profile: payload,
                loading: false
                
            }
                
        case PROFILE_ERROR: 
            return {
                ...state,
                error: payload,
                loading: false
            };

        case CLEAR_PROFILE:
            return{
                ...state,
                error: payload,
                loading:false
            }
        default:
            return state;
    }
}
