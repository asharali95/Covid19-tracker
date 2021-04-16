import React, { useEffect } from "react";
import { connect } from "react-redux";
import { retrieveData } from "../../Redux/countryData/countryDataActions/countryDataActions";
import "./Test.css";
const Test = ({ match:{params:{searchedCountry}},retrieveData, covid_data }) => {
    console.log(searchedCountry);
  useEffect(() => {
    retrieveData(searchedCountry);
  }, []);
  return (
    <div>
      {covid_data.map((data) => (
        <div>
          <div
            style={{
              backgroundImage: `url(${data.countryinfo.flag})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="flag"
          ></div>
          <h1>{data.countryName}</h1>
          <h3>cases: {data.countryinfo.cases}</h3>
          <h3>Continent: {data.countryinfo.continent}</h3>
          <h3>Active: {data.countryinfo.active}</h3>
          <h3>Death: {data.countryinfo.deaths}</h3>
          <h3>Recovered: {data.countryinfo.recovered}</h3>
          <h3>Today's deaths: {data.countryinfo.todayDeaths}</h3>
          <h3>Population: {data.countryinfo.population}</h3>
          <h3>Critical: {data.countryinfo.critical}</h3>
          <h3>Tests: {data.countryinfo.tests}</h3>
        </div>
      ))}
    </div>
  );
};
var mapState = (state) => ({
  covid_data: state.covid_Data,
});
var actions = {
  retrieveData,
};
export default connect(mapState, actions)(Test);
