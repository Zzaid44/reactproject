import React, { useContext } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Button, Link } from "@mui/material";
import { UserContext } from "../context/UserContext";
function Navbar() {
  const {currentUser,logout} = useContext(UserContext);
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
            
            <Button onClick={() => navigate("/landingpage") }>home</Button>
          </li>
          <li>
         
             <Button onClick={() => navigate("/aboutus") }>Aboutus</Button>
          </li>
          {currentUser ?(
            <>
            <li>
            
             <Button onClick={() => logout() }>logout</Button>
              
          </li>
          </>
          ) : (
            <>
          <li>
         
             <Button onClick={() => navigate("/register") }>Register</Button>
          </li>
          <li>
           
             <Button onClick={() => navigate("/login") }>Login</Button>
          
          </li>
         </>
          )}
        </ul>

      </nav>
    </>
  );
}
export default Navbar;
