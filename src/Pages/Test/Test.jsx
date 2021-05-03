import React from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import "./Test.css";

const Test = ({ specificCountryData }) => {
  var {
    todayCases,
    todayDeaths,
    todayRecovered,
  } = specificCountryData.countryInfo;
  // console.log(active);
  const data = {
    labels: ["Today's cases", "Today's death", "Today's recovery"],
    datasets: [
      {
        label: "My First Dataset",
        data: [todayCases, todayDeaths, todayRecovered],
        backgroundColor: ["#00578B","#FF1E41", "#7ED957"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="Test">
      <Doughnut data={data} />
    </div>
  );
};
var mapState = (state) => ({
  specificCountryData: state.specific_country_data,
});
export default connect(mapState)(Test);
