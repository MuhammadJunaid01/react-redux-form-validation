import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserLocation } from "../../redux/reduicers/location";
import { handleOpenDialog } from "../../redux/reduicers/openDialog";
import { fetchLocationData, weatherData } from "../../utils/fetchLocationData";
import UseDialog from "../dialog";
import DisplayLocation from "../location";
import Users from "../users";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();

  /* A hook that is used to get the state of the openDialog reducer. */
  const { open } = useSelector((state) => state.openDialog);
  /* A hook that is used to get the data from the locationApi. */
  // const { data, error } = useGetUserLocationQuery();
  const [details, setDetails] = useState({});
  const [agree, setAgree] = useState(false);
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  /* A hook that is called when the component is mounted. */
  useEffect(() => {
    /* Dispatching the data to the reducer. */
    dispatch(getUserLocation(data));
  }, [data]);
  /**
   * If the user clicks the 'Disagree' button, the dialog box will close and the user will be
   * redirected to the home page.
   */
  const hadndleDisAgree = () => {
    setAgree(false);
    dispatch(handleOpenDialog(false));
  };
  /**
   * When the user clicks the button, the dialog box closes and the user is set to agree.
   */
  const handleAgree = () => {
    setAgree(true);
    dispatch(handleOpenDialog(false));
  };
  useEffect(() => {
    /* This is a conditional statement that checks if the city is empty. If it is empty, it will return
    nothing. If it is not empty, it will fetch the location data and set the data to the state. */
    if (city == "") {
      return;
    } else {
      fetchLocationData(city)
        .then((data) => setData(data.data[0]))
        .catch((err) => console.log(err));
    }
  }, [city]);
  const handleData = () => {
    /* This is a conditional statement that checks if the city is empty. If it is empty, it will return
    
        nothing. If it is not empty, it will fetch the location data and set the data to the state. */
    if (city == "") {
      alert("please input city name");
    } else {
      fetchLocationData(city)
        .then((data) => setData(data.data[0]))
        .catch((err) => {
          return toast.error(`${err.message}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    }
  };
  return (
    <div style={{ position: "relative", padding: "0px 10px" }}>
      <UseDialog handleAgree={handleAgree} hadndleDisAgree={hadndleDisAgree} />
      <ToastContainer />
      {/* This is a conditional statement that checks if the user has agreed to the terms and
      conditions. If the user has agreed, it will display the DisplayLocation component. If the user
      has not agreed, it will return nothing.  */}
      {agree ? (
        <>
          <DisplayLocation
            handleData={handleData}
            setCity={setCity}
            agree={agree}
          />
        </>
      ) : null}
      {/* A conditional statement that checks if the dialog box is open. If it is open, it will return
     nothing. If it is not open, it will display the Users component.  */}
      {open ? null : <Users />}
    </div>
  );
};

export default Home;
