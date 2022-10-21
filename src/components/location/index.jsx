import React from "react";
import { useSelector } from "react-redux";

/* A React component that is using the useSelector hook to get the data from the Redux store. */
const DisplayLocation = ({ agree }) => {
  /* Destructuring the data from the state.userLocation. */
  const { data } = useSelector((state) => state.userLocation);

  return (
    <div style={{ textAlign: "center" }}>
      {agree && (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontWeight: "600px",
              fontFamily: "monospace",
              fontSize: "20px",
            }}
          >
            City: {data?.city}
          </p>
          ,
          <p
            style={{
              fontWeight: "600px",
              fontFamily: "monospace",
              fontSize: "20px",
            }}
          >
            country code : {data?.country_code}
          </p>
          ,
          <p
            style={{
              fontWeight: "600px",
              fontFamily: "monospace",
              fontSize: "20px",
            }}
          >
            latitude: {data?.latitude}
          </p>
          ,
          <p
            style={{
              fontWeight: "600px",
              fontFamily: "monospace",
              fontSize: "20px",
            }}
          >
            longitude : {data?.longitude}
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayLocation;
