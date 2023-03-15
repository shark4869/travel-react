import axios from "axios";
import { toast } from 'react-toastify';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, UPDATE_SUCCESS, UPDATE_FAILURE  } from "./actionType";
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
export const updateSuccess = (user) => ({
  type: UPDATE_SUCCESS,
  payload: user,
  reducer: 'user',
});
export const updateFail = (error) => ({
  type: UPDATE_FAILURE,
  payload: error,
  reducer: 'user',
});
export const logOut = () => ({
    type: LOGOUT,
    reducer: 'user',
})
export const loginUser = (userData) => (dispath) => {
    dispath(loginRequest());
    axios.post('http://localhost:3000/api/login',userData)
        .then((response)=>{
            dispath(loginSuccess(response.data.user));
            console.log('check success: ', response.data.user);
            toast.success("Login success");
        })
        .catch((error)=>{
            dispath(updateFail(error.response));
            console.log('check error: ', error.response);
            toast.error("Login failure");
        });
}

export const updateUser = (id, userData) => {
  return dispatch => {
    axios
      .patch(`http://localhost:3000/api/users/${id}`, userData)
      .then(response => {
        dispatch(updateSuccess(response.data));
        console.log('check success: ', response.data);
        toast.success('Update success');
      })
      .catch(error => {
        dispatch(updateFail((error.response)));
        console.log('check error: ', error.response);
        toast.error("Update failure");
      });
  };
};