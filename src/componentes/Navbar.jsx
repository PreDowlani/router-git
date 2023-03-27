import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/aboutus"}>About Us</NavLink>
        </li>
        <li>
          <NavLink to={"/contacto"}>Contacto</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
