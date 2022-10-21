import axios from "axios";

export const fetchLocationData = async (cityName) => {
  try {
    const res = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=lvemfIVtmZjNcAMGNIw495OSlryM9e3k&q=${cityName}&language=en`
    );

    return res;
  } catch (error) {
    return error.message;
  }
};

export const weatherData = async (key) => {
  try {
    const res = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=lvemfIVtmZjNcAMGNIw495OSlryM9e3k`
    );

    return res;
  } catch (error) {
    return error.message;
  }
};
