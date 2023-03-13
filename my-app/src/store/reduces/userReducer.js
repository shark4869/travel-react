import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/actionType";
const initialState ={
    isLoading: false,
    isLogin: false,
    user: null,
    error: null
}
const userReducer = ( state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {...state, isLoading: true};
        case LOGIN_SUCCESS: 
            return {...state, isLoading: false, isLogin: true, user: action.payload, error: null};
        case LOGIN_FAILURE:
            return {...state, isLoading: false, isLogin: false, user: null, error: action.payload};
        case LOGOUT:
            return {...initialState};
        default:
            return state;    
    }
}
export default userReducer;