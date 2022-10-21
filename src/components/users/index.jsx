import { Grid } from "@mui/material";
import React from "react";
import "../../styles/users.css";

import { displayUser } from "../../utils";
const Users = () => {
  return (
    <div className="users_container">
      <Grid container spacing={2}>
        {displayUser?.map((user, index) => {
          return (
            <Grid key={index} item xs={12} md={3}>
              <div className="user_frofile_container">
                <div className="user_image">
                  <img className="pppp" src={user.img} alt="" />
                </div>
                <div className="user_info">
                  <p
                    style={{
                      margin: "0px 0px",
                      marginTop: "3px",
                      marginBottom: "2px",
                      fontWeight: "700",
                      fontFamily: "monospace",
                      fontSize: "20px",
                    }}
                  >
                    {user.name}
                  </p>
                  <p
                    style={{
                      margin: "0px 0px",
                      fontWeight: "500",
                      fontFamily: "monospace",
                      fontSize: "16px",
                    }}
                  >
                    {user.profession}
                  </p>
                  <p
                    style={{
                      margin: "10px 0px",
                    }}
                  >
                    {user.info}
                  </p>
                  <p
                    style={{
                      margin: "6px 0px",
                      backgroundColor: "#A79AE0",
                      width: "60%",
                      margin: "0 auto",
                      borderRadius: "4px",
                    }}
                  >
                    {user.email}
                  </p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Users;
