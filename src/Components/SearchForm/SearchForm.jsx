import React,{useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import {redirectPage} from "../../Redux/countryData/countryDataActions/countryDataActions"
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));
const SearchForm = () => {
    var [searchedCountry, setSearchedCountry] = useState("")

  const classes = useStyles();
  return (
     <form className={classes.root} noValidate autoComplete="off">
      <TextField value={searchedCountry} onChange={(e) =>setSearchedCountry(e.target.value)} id="filled-basic" label="Country Name" variant="outlined" />
      <Button>Search</Button>
    </form>
    
  );
}


export default SearchForm
