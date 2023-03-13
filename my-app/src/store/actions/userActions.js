import axios from "axios";
import { toast } from 'react-toastify';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionType";
export const loginRequest = () => ({
    type: LOGIN_REQUEST,
    reducer: 'user',
});
export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data,
    reducer: 'user',
});
export const loginError = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
    reducer: 'user',
})
export const logOut = () => ({
    type: 'LOGOUT',
    reducer: 'user',
})
export const loginUser = (userData) => (dispath) => {
    dispath(loginRequest());
    axios.post('http://localhost:3000/api/login',userData)
        .then((response)=>{
            dispath(loginSuccess(response.data.user));
            console.log('check success: ', response.data.user);
            toast.success("Login successfully!");
        })
        .catch((error)=>{
            dispath(loginError(error.response.data));
            console.log('check error: ', error.response.data);
             toast.error("Login failed!");
        });
}