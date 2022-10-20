import React from "react";
import ErrorAnimation from "../../assets/images/pageNotFound.gif";
const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={ErrorAnimation} alt="ErrorAnimation" />
    </div>
  );
};

export default PageNotFound;
