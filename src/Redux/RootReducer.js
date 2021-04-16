import { combineReducers } from "redux";
import countryDataReducer from "./countryData/countryDataReducer/countryDataReducer";

var rootReducer = combineReducers({
    covid_Data: countryDataReducer
  });
  
  export default rootReducer;