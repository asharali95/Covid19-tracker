import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Error.css";
const Error = () => {
  return (
    <div className="error">
      <Navbar />
      <Grid className="container" container>
        <Grid className="left flex" item xs={12} sm={6}>
          <div className="left-content">
            <div className="heading">
              <h1>COUNTRY NOT FOUND</h1>
            </div>
            <div className="err"></div>
            <div className="content">
              <p>
                Guideline you must follow in order to survive the pandemic:
                <ul>
                  <li>
                    {" "}
                    Wear a mask that covers your nose and mouth to help protect
                    yourself and others
                  </li>
                  <li>
                    {" "}
                    Stay 6 feet apart from others who don't live with you
                  </li>
                  <li>Avoid crowds and poorly ventilated indoor spaces.</li>
                  <li>Wash your hands often with soap and water.</li>
                </ul>
              </p>
            </div>
          </div>
        </Grid>
        <Grid className="right flex" item xs={12} sm={6}>
          <div className="img"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Error;
