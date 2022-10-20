import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "../components/error";
import Home from "../components/home";
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
              <HomeLayoute isSignUp={false}>
                <Home />
              </HomeLayoute>
            }
          />
          <Route
            path="/signUp"
            element={
              <HomeLayoute isSignUp={true}>
                <SignUp isSigIn={false} />
              </HomeLayoute>
            }
          />
          <Route
            path="/SignIn"
            element={
              <HomeLayoute isSignUp={true}>
                <SignUp isSigIn={true} />
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
