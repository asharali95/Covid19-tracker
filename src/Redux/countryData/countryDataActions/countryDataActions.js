import { categorizedData } from "../../../utility";
import { SET_COUNTRY_DATA } from "../countryDataConstants/countryDataConstants";


export var retrieveData = () => async (dispatch) => {
  try {
    var query = await fetch(
      "https://corona.lmao.ninja/v2/countries?yesterday=&sort="
    );
    var countriesData = await query.json();
    var data = categorizedData(countriesData)
 
    dispatch({
        type: SET_COUNTRY_DATA,
        payload:{
          data
        }
    })
  } catch (error) {
    console.log(error);
  }
};

export var setSpecificCountryData = (countryData,searchedCountry) => (dispatch) =>{
  try {
    var data = countryData.filter(countryArr => countryArr.countryName === searchedCountry)

  dispatch({
    type: SET_COUNTRY_DATA,
    payload:{
    data
    }
  })

  } catch (error) {
    console.log(error)
  } 
}