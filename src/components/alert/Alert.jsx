import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <h1>NOT:{alert.msg}</h1>
      </div>
    )
  );
};
export default Alert;
