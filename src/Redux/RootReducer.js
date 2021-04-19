import { combineReducers } from "redux";
import countryDataReducer from "./countryData/countryDataReducer/countryDataReducer";
import specificCountryDataReducer from "./specificCountryData/specificCountryDataReducer"

var rootReducer = combineReducers({
    covid_Data: countryDataReducer,
    specific_country_data: specificCountryDataReducer
  });
  
  export default rootReducer;