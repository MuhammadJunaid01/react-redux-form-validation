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
  console.log(data);
  useEffect(() => {
    if (data.Key == undefined) {
      alert("unde");
      return;
    } else {
      weatherData(data.Key)
        .then((data) => setWeather(data.data[0]))
        .catch((err) => console.log("weather data err", err));
    }
  }, [data]);
  console.log("WEATHER jjj", weather);

  return (
    <div>
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
                  <p>Country: {data?.Country?.EnglishName}</p>
                  <p>Latitude: {data?.GeoPosition?.Latitude}</p>
                  <p>Longitude: {data?.GeoPosition?.Longitude}</p>
                  <p>City:{data?.Region?.EnglishName}</p>
                  <p>Temperature: {weather?.Temperature?.Metric?.Value}C</p>
                </div>
                <div className="weather_logo">
                  <img src={WeatherLogo} alt="WeatherLogo" />
                </div>
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
