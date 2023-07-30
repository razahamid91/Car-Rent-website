import { combineReducers } from 'redux';
import authReducer from './authReducer';
import carReducer from './carReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  car: carReducer,
  // Add more reducers here if you have them
});

export default rootReducer;
