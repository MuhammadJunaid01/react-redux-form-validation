import React from "react";
import ErrorAnimation from "../../assets/images/pageNotFound.gif";
/**
 * It returns a div with a centered image.
 * @returns A React component.
 */
const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={ErrorAnimation} alt="ErrorAnimation" />
    </div>
  );
};

export default PageNotFound;
