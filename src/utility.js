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