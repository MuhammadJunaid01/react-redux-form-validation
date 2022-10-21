import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/location.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WeatherLogo from "../../assets/images/weather.gif";
import { weatherData } from "../../utils/fetchLocationData";
/* A React component that is using the useSelector hook to get the data from the Redux store. */
const DisplayLocation = ({ agree, setCity, handleData }) => {
  /* Destructuring the data from the state.userLocation. */
  const { data } = useSelector((state) => state.userLocation);
  const [weather, setWeather] = useState({});
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    /* Checking if the data.Key is undefined, if it is undefined it will return nothing, if it is not
    undefined it will call the weatherData function and set the weather state. */
    if (data.Key == undefined) {
      return;
    } else {
      weatherData(data.Key)
        .then((data) => setWeather(data.data[0]))
        .catch((err) => console.log("weather data err", err));
    }
  }, [data]);
  return (
    <div>
      {/* Checking if the agree state is true, if it is true it will render the div.  */}
      {agree && (
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={4}>
              <div className="weather_card">
                <input
                  type="text"
                  onFocus={() => setFocus(true)}
                  onBlur={(e) => {
                    setCity(e.target.value);
                    // setFocus(false);
                  }}
                />
                <div className="weather_info">
                  <p style={{ marginBottom: "5px" }}>
                    Country: {data?.Country?.EnglishName}
                  </p>
                  <p style={{ marginBottom: "8px" }}>
                    City: {data.LocalizedName}
                  </p>
                  <p style={{ marginBottom: "8px" }}>
                    Latitude: {data?.GeoPosition?.Latitude}
                  </p>
                  <p style={{ marginBottom: "8px" }}>
                    Longitude: {data?.GeoPosition?.Longitude}
                  </p>
                  <p style={{ marginBottom: "8px" }}>
                    Region:{data?.Region?.EnglishName}
                  </p>
                  <p style={{ marginBottom: "5px" }}>
                    Temperature: {weather?.Temperature?.Metric?.Value}C
                  </p>
                </div>
                <div className="weather_logo">
                  <img src={WeatherLogo} alt="WeatherLogo" />
                </div>
                {/* Checking if the focus state is true, if it is true it will render the button.  */}
                {focus && (
                  <button className="search_btn" onClick={handleData}>
                    Search
                  </button>
                )}
              </div>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default DisplayLocation;
