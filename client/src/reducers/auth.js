import { REGISTER_SUCCESS, REGISTRATION_FAIL } from "../actions/types";


const initialState ={
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}



export default function(state=initialState, action) {
        const{type, payload} = action
        switch(type){
            case REGISTER_SUCCESS:
                localStorage.setItem("token",payload.token);
                return {
                    ...state,
                    ...payload,
                    isAuthenticated : true, 
                    loading: false
                };
            
            case REGISTRATION_FAIL:
                // remove the token from local storage if registration fails
                localStorage.removeItem('token');
                return {
                    ...state,
                    token:null,
                    isAuthenticated:false,
                    loading: false
                };
            default:return state;
        }

}