// eslint-disable-next-line no-unused-vars
//import { useState } from "react";
import "../components/Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div>
        <nav>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/list">ListContacts</NavLink>
          </li>
          <li>
            <NavLink to="/formAdd">FormAddUser</NavLink>
          </li>
        </nav>
      </div>
    </>
  );
}

export default Nav;
