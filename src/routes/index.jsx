import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../components/sign_up/SignUp";
import HomeLayoute from "../layoutes/homeLayoute";
const PublicRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/signUp"
            element={
              <HomeLayoute isSignUp={true}>
                <SignUp />
              </HomeLayoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default PublicRoutes;
