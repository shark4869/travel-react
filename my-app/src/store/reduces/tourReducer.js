import { FETCH_TOURS_SUCCESS, FETCH_TOUR_SUCCESS } from "../actions/actionType";
const initialState ={
    listTour: [],
    tour: null
}
const tourReducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_TOURS_SUCCESS:
            return {...state, listTour:action.payload};
        case FETCH_TOUR_SUCCESS:
            return {...state, tour:action.payload};
        default:
            return state;    
    }
}
export default tourReducer;