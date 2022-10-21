import React from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/useDialog.css";
import { Grid } from "@mui/material";
const UseDialog = ({ handleAgree, hadndleDisAgree }) => {
  const { open } = useSelector((state) => state.openDialog);
  return (
    <div className="useDailog_container">
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={hadndleDisAgree}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={6}>
          {open && (
            <div className="useDailog_content">
              <>
                <div className="dialog_title">
                  <h3 style={{ margin: "0", padding: "0" }}>
                    Use Google's location service?
                  </h3>
                  <p style={{ margin: "20px 0px" }}>
                    {" "}
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </p>
                </div>
                <Button onClick={hadndleDisAgree}>Disagree</Button>
                <Button onClick={handleAgree} autoFocus>
                  Agree
                </Button>
              </>
            </div>
          )}
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </div>
  );
};

export default UseDialog;
