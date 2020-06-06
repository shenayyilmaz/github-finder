import React, { Fragment } from "react";
import spinner from "../spinner/spinner.gif";

const Spinner = () => (
  <Fragment>
    <h1>Spinner</h1>
    <img
      src={spinner}
      alt=""
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;
