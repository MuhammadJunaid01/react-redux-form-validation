import React from "react";
import { useSelector } from "react-redux";

const DisplayLocation = ({ agree }) => {
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
