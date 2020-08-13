import {combineReducers} from "redux";
import dataReducer from "./users/reducer";

export default combineReducers({
   data: dataReducer
});




