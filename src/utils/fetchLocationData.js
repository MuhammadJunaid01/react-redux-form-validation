import axios from "axios";

/**
 * It takes a city name as an argument and returns the data from the API call
 * @param cityName - The name of the city you want to get the weather for.
 * @returns An object with a data property that contains an array of objects.
 */
export const fetchLocationData = async (cityName) => {
  /* A try catch block. It is used to catch errors. */
  try {
    const res = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=lvemfIVtmZjNcAMGNIw495OSlryM9e3k&q=${cityName}&language=en`
    );

    return res;
  } catch (error) {
    return error.message;
  }
};

/**
 * It returns the weather data from the AccuWeather API.
 * param key - The key is the location key.
 * returns the response from the API.
 */
export const weatherData = async (key) => {
  /* A try catch block. It is used to catch errors. */

  try {
    const res = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=lvemfIVtmZjNcAMGNIw495OSlryM9e3k`
    );

    return res;
  } catch (error) {
    return error.message;
  }
};
