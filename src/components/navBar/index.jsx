import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/navBar.css";

const Navbar = () => {
  const navigate = useNavigate();

  /**
   * When the user clicks the logout button, the user will be alerted that they have successfully logged
   * out.
   */
  const handleLogOut = () => {
    alert("success");
  };
  return (
    <div className="nav_bar_container">
      <nav>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/SignUp")}>Sign Up</li>
        <li onClick={() => navigate("/SignIn")}>Sign In</li>
        <li onClick={handleLogOut}>Log out</li>
      </nav>
    </div>
  );
};

export default Navbar;
