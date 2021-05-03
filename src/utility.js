
export const categorizedData = (countriesData) =>{
    var dataArr = [];
    for (var countryData in countriesData) {
      var {
        country,
        active,
        cases,
        todayCases,
        todayDeaths,
        todayRecovered,
        recovered,
        deaths,
        population,
        continent,
        critical,
        tests,
        countryInfo:{
          flag
        }
      } = countriesData[countryData];
      dataArr.push({countryName: country, countryInfo:{active,
        cases,
        todayCases,
        todayDeaths,
        todayRecovered,
        recovered,
        deaths,
        population,
        continent,
        critical,
        tests,
      flag}})
    }
    return dataArr
}
export var searchCountry = (data,searchedCountry) =>{
  var covidData=data.find((country) => country.countryName.toLowerCase()===searchedCountry.toLowerCase());
  if(covidData) return true
  else return false
  // return data.find((country) => country.countryName.toLowerCase()===searchedCountry.toLowerCase())

}
// export var retrieveSpecificCountryData = (data,searchedCountry) =>{
//   var searchedCountryData = []
//   for(var i in data){
//       if(data[i].countryName === searchedCountry){
//       // searchedCountryData = {
//       //        countryName: data[i].countryName, 
//       //        countryinfo: {
//       //            ...data[i].countryInfo
//       //        }
//       searchedCountryData.push({countryName: data[i].countryName, countryinfo: {...data[i].countryInfo}})
//       }
//   }
//   return searchedCountryData
// }
