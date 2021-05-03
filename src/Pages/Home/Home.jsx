import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchForm from '../../Components/SearchForm/SearchForm'
import { retrieveData } from '../../Redux/countryData/countryDataActions/countryDataActions'
import "./Home.css"
const Home = ({retrieveData}) => {
    useEffect(() => {
        retrieveData();
    }, [])
    return (
        <div className="home">
            <div className="left">
                <div className="left-content">
                  <h1>COVID-19 TRACKER</h1>
                  <p>In light of coronavirus outbreak, search out your country and check up-to-date covid situation from here</p>                
                  <SearchForm/>
                </div>
            </div>
            <div className="right flex">
                <div className="virus-image"></div>
            </div>
        </div>
    )
}
var actions = {
    retrieveData
}
export default connect(null,actions)(Home)
