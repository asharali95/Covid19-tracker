import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
     <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <TextField value={searchedCountry} onChange={(e) =>setSearchedCountry(e.target.value)} id="filled-basic" label="Country Name" variant="outlined" />
      <Link style={{outline:"none",textDecoration:"none"}} to={`test/${searchedCountry}`}><Button>Search</Button></Link>
    </form>
    
  );
}
export default SearchForm
