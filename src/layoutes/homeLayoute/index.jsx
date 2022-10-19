import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navBar";

const HomeLayoute = ({ children, isSignUp }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      {children}
      {isSignUp ? null : (
        <div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomeLayoute;
