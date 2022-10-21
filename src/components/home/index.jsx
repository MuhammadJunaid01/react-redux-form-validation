import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetUserLocationQuery } from "../../redux/api/locationApi";
import { getUserLocation } from "../../redux/reduicers/location";
import { handleOpenDialog } from "../../redux/reduicers/openDialog";

import UseDialog from "../dialog";
import DisplayLocation from "../location";

const Home = () => {
  const dispatch = useDispatch();
  // const [data, setData] = useState();
  const { open } = useSelector((state) => state.openDialog);
  const { data, error } = useGetUserLocationQuery();
  const [details, setDetails] = useState({});
  const [agree, setAgree] = useState(false);
  const handleClickOpen = () => {};

  const handleClose = () => {};
  useEffect(() => {
    // const data = fetchUserData();
    // data.then((details) => setDetails(details));
    dispatch(getUserLocation(data));
    handleClickOpen();

    console.log(data);
  }, [data]);
  const hadndleDisAgree = () => {
    setAgree(false);
    dispatch(handleOpenDialog(false));
  };
  const handleAgree = () => {
    setAgree(true);
    dispatch(handleOpenDialog(false));
  };
  console.log(details);
  return (
    <div>
      <UseDialog
        handleAgree={handleAgree}
        hadndleDisAgree={hadndleDisAgree}
        handleClose={handleClose}
      />

      {open ? null : (
        <>
          <DisplayLocation data={details} agree={agree} />
        </>
      )}
    </div>
  );
};

export default Home;
