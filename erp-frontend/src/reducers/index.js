import { combineReducers } from "redux";
import registerUserReducer from './registerUserReducer';

export default combineReducers({
     registerUser:registerUserReducer
})