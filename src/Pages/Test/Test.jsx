import {useEffect} from "react"
import { connect } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import { setSpecificCountryData } from "../../Redux/specificCountryData/specificCountryDataActions";

import "./Test.css";
const Test = ({ match:{params:{searchedCountry}},setSpecificCountryData,data}) => {
  console.log(data);
    useEffect(() => {
      setSpecificCountryData(searchedCountry)
    },[])
  return (
    <div>
      <Navbar/>
      <div
            style={{
              backgroundImage: `url(${data?.countryInfo?.flag})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="flag"
          ></div>
      <h1>
        {data?.countryName}
      </h1>
      <h3>active: {data?.countryInfo?.active}</h3>
      <h3>cases: {data?.countryInfo?.cases}</h3>
      <h3>continent: {data?.countryInfo?.continent}</h3>
      <h3>critical: {data?.countryInfo?.critical}</h3>
      <h3>death: {data?.countryInfo?.deaths}</h3>
    </div>
  )
};

var mapState = (state) =>({
  data: state.specific_country_data
})
var actions={
  setSpecificCountryData
}
export default connect(mapState,actions)(Test);


