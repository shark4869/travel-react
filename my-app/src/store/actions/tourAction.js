import { FETCH_TOURS_SUCCESS, FETCH_TOUR_SUCCESS } from "../actions/actionType";
import axios from 'axios';

export const fetchToursSuccess = (tours) => ({
  type: FETCH_TOURS_SUCCESS,
  payload: tours,
   reducer: 'tours',
});
export const fetchTourSuccess = (tour) => ({
  type: FETCH_TOUR_SUCCESS,
  payload: tour,
   reducer: 'tours',
});

export const fetchTours = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/destination')
        .then((response) => {
            dispatch(fetchToursSuccess(response.data));
            // console.log(response.data)
        });
  };
};
export const fetchTour = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:3000/api/destination/${id}`)
        .then((response) => {
            dispatch(fetchTourSuccess(response.data));
            console.log(response.data)
        });
  };
};