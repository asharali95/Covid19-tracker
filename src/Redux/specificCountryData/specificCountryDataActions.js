import { ADD_DATA } from "./specificCountryDataConstant";
import history from "../../history/history";
export var setSpecificCountryData = (searchedCountry) => (
  dispatch,
  getState
) => {
  //----NOTE----
  //mismatching due to case sensitivity (.toLowerCase solved everything)
  //organized code a lil bit
  var { covid_Data } = getState();
  try {
    var data = covid_Data.find(
      (country) =>
        country.countryName.toLowerCase() === searchedCountry.toLowerCase() 
    );
    if (data) {
      dispatch({
        type: ADD_DATA,
        payload: {
          data: data,
        },
      });
    } else {
      history.push("/Error");
    }
  } catch (error) {
    console.log(error);
  }
};
