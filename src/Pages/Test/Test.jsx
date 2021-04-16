import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {retrieveData} from "../../Redux/countryData/countryDataActions/countryDataActions"

const Test = ({retrieveData}) => {
    useEffect(()=>{
        retrieveData();
    },[])
    return (
        <div>
            this is test page
        </div>
    )
}
var mapState = (state) =>({
    
})
var actions = {
    retrieveData,
}
export default connect(mapState, actions)(Test)
