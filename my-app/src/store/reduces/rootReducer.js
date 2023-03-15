import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tourReducer from './tourReducer';

const rootReducer = combineReducers({
  user: userReducer,
  tours: tourReducer,
});

export default rootReducer;