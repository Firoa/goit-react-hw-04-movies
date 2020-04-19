import React from "react";
import { NavLink } from "react-router-dom";
const activeStyle = {
  color: "palevioletred",
};
const Navigation = () => (
  <ul>
    <li>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" activeStyle={activeStyle}>
        MOVIES
      </NavLink>
    </li>
   
  </ul>
);

export default Navigation;
