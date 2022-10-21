import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetUserLocationQuery } from "../../redux/api/locationApi";
import { getUserLocation } from "../../redux/reduicers/location";
import { handleOpenDialog } from "../../redux/reduicers/openDialog";
import UseDialog from "../dialog";
import DisplayLocation from "../location";
import Users from "../users";
const Home = () => {
  const dispatch = useDispatch();

  /* A hook that is used to get the state of the openDialog reducer. */
  const { open } = useSelector((state) => state.openDialog);
  /* A hook that is used to get the data from the locationApi. */
  const { data, error } = useGetUserLocationQuery();
  const [details, setDetails] = useState({});
  const [agree, setAgree] = useState(false);

  /* A hook that is called when the component is mounted. */
  useEffect(() => {
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

  return (
    <div style={{ position: "relative", padding: "0px 10px" }}>
      <UseDialog handleAgree={handleAgree} hadndleDisAgree={hadndleDisAgree} />

      {agree ? (
        <>
          <DisplayLocation data={details} agree={agree} />
        </>
      ) : null}
      {open ? null : <Users />}
    </div>
  );
};

export default Home;
