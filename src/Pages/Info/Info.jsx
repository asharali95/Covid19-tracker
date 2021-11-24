import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { setSpecificCountryData } from "../../Redux/specificCountryData/specificCountryDataActions";
import "./Info.css";
const Info = ({
  match: {
    params: { searchedCountry },
  },
  setSpecificCountryData,
  data,
}) => {
  useEffect(() => {
    setSpecificCountryData(searchedCountry);
  }, [searchedCountry]);
  return (
    <div>
      <Navbar />

      <h1 className="flex">{data?.countryName}</h1>
      <div className="flex">
        <img
          src={data?.countryInfo?.flag}
          style={{ border: "20px solid #ff5656" }}
        />
        <h3>active: {data?.countryInfo?.active}</h3>
        <h3>cases: {data?.countryInfo?.cases}</h3>
        <h3>continent: {data?.countryInfo?.continent}</h3>
        <h3>critical: {data?.countryInfo?.critical}</h3>
        <h3>death: {data?.countryInfo?.deaths}</h3>
      </div>
      <Link to="/test">test</Link>
    </div>
  );
};

var mapState = (state) => ({
  data: state.specific_country_data,
});
var actions = {
  setSpecificCountryData,
};
export default connect(mapState, actions)(Info);
