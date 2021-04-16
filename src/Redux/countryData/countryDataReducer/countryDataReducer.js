import { SET_COUNTRY_DATA } from "../countryDataConstants/countryDataConstants";

var initialState = [];
const countryDataReducer = (state = initialState, action) => {
  var { type, payload } = action;
    switch (type) {
        case SET_COUNTRY_DATA:
           return payload.data;
        default:
            return state;
    }
};

export default countryDataReducer;