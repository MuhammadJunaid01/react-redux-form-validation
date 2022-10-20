import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleOpenDialog } from "../../redux/reduicers/openDialog";

import UseDialog from "../dialog";
import DisplayLocation from "../location";

const fetchUserData = async () => {
  const res = await fetch(
    "https://geolocation-db.com/json/6ba8ff30-456e-11ed-b55d-a515c0aa6157"
  );
  const data = await res.json();
  return data;
};
const Home = () => {
  const dispatch = useDispatch();
  // const [data, setData] = useState();
  const { open } = useSelector((state) => state.openDialog);
  const [details, setDetails] = useState({});
  const [agree, setAgree] = useState(false);
  const handleClickOpen = () => {};

  const handleClose = () => {};
  useEffect(() => {
    const data = fetchUserData();
    data.then((details) => setDetails(details));
    handleClickOpen();
  }, []);
  const hadndleDisAgree = () => {
    setAgree(false);
    dispatch(handleOpenDialog(false));
  };
  const handleAgree = () => {
    setAgree(true);
    dispatch(handleOpenDialog(false));
  };
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
