import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Error.css";
const Error = () => {
  return (
    <div className="error">
      <Navbar />
      <Grid className="container" container>
        <Grid className="left" item xs={12} sm={6} />
        <Grid className="right flex" item xs={12} sm={6}>
          <div className="img"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Error;
