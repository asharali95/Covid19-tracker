import {ADD_DATA} from "./specificCountryDataConstant"
var initialState = null;

export const specificCountryData = (state = initialState , actions )=>{
    var {type, payload} = actions;
    switch (type) {
        case ADD_DATA:
            return payload.data;
        default:
            return state;
    }
}
export default specificCountryData