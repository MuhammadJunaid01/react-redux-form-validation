import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "../components/error";
import Home from "../components/home";
import SignIn from "../components/sign_in/SignIn";
import SignUp from "../components/sign_up/SignUp";
import HomeLayoute from "../layoutes/homeLayoute";
const PublicRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayoute>
                <Home />
              </HomeLayoute>
            }
          />
          <Route
            path="/signUp"
            element={
              <HomeLayoute isSignUp={true}>
                <SignUp />
              </HomeLayoute>
            }
          />
          <Route
            path="/SignIn"
            element={
              <HomeLayoute isSignUp={true}>
                <SignIn />
              </HomeLayoute>
            }
          />
          <Route
            path="*"
            element={
              <HomeLayoute isSignUp={true}>
                <PageNotFound />
              </HomeLayoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default PublicRoutes;
