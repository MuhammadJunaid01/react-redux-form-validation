import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/footer";
import Navbar from "../../components/navBar";

const HomeLayoute = ({ children, isSignUp }) => {
  const { open } = useSelector((state) => state.openDialog);

  return (
    <>
      <div>
        <Navbar />
      </div>
      {children}
      {isSignUp ? null : <div>{open ? null : <Footer />}</div>}
    </>
  );
};

export default HomeLayoute;
