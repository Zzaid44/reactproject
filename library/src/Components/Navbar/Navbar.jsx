import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Button, Link } from "@mui/material";
function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <h2>
            Drive<span>z</span>
          </h2>
        </div>
        <ul className="nav-linke">
          <li>
            {" "}
            <Button onClick={() => navigate("/landingpage") }>home</Button>{" "}
          </li>
          <li>
            {" "}
             <Button>Aboutus</Button>{" "}
          </li>
          <li>
            {" "}
             <Button onClick={() => navigate("/register") }>Register</Button>{" "}
          </li>
          <li>
            {" "}
             <Button>Login</Button>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
