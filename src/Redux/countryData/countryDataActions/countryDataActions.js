import { categorizedData, retrieveSpecificCountryData } from "../../../utility";
import { SET_COUNTRY_DATA } from "../countryDataConstants/countryDataConstants";

export var retrieveData = (searchedCountry) => async (dispatch) => {
  try {
    var query = await fetch(
      "https://corona.lmao.ninja/v2/countries?yesterday=&sort="
    );
    var countriesData = await query.json();
    var data = categorizedData(countriesData)
    var searchedCountryData = retrieveSpecificCountryData(data, searchedCountry)
    console.log(searchedCountryData)
    dispatch({
        type: SET_COUNTRY_DATA,
        payload:{
            data: searchedCountryData
        }
    })
  } catch (error) {
    console.log(error);
  }
};
