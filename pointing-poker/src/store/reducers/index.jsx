import { combineReducers } from 'redux';
import { userReducer } from './registrationReducer';

export const rootReducer = combineReducers({
  user: userReducer
});
