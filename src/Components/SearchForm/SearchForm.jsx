import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { searchCountry } from '../../utility';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));
const SearchForm = ({data}) => {
    var [searchedCountry, setSearchedCountry] = useState("")
  
  const classes = useStyles();
  return (
     <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <TextField value={searchedCountry} onChange={(e) =>setSearchedCountry(e.target.value)} id="filled-basic" label="Country Name" variant="outlined" />
     <Link style={{outline:"none",textDecoration:"none"}} to={(searchCountry(data,searchedCountry)===true?`test/${searchedCountry}`:`/error`)}><Button>Search</Button></Link> 
    </form>
    
  );
}
var mapState = (state) =>({
  data: state.covid_Data,
})
export default connect(mapState)(SearchForm)
