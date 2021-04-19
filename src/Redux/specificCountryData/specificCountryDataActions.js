import { ADD_DATA } from "./specificCountryDataConstant"
import history from "../../history/history"
export var setSpecificCountryData = (searchedCountry) => (dispatch,getState) =>{
    var{covid_Data} = getState()
    try {
        var ifExists = covid_Data.some((country) => {if(country.countryName===searchedCountry) return true})
        if(ifExists){
            var data = covid_Data.filter(countryArr => countryArr.countryName === searchedCountry)
          dispatch({
            type: ADD_DATA,
            payload:{
            data:data[0]
            }
          })
        }
        else{
          history.push("/Error")
        }
  
    } catch (error) {
      console.log(error)
    } 
  }