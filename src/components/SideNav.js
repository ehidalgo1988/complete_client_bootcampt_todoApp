import React from "react";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <>
      <nav className="nav nav-pills nav-fill flex-column bg-dark-subtle text-emphasis-dark">
        <NavLink className="nav-link text-emphasis-dark" to={"/create-user"}>
          Create User
        </NavLink>
        <NavLink className="nav-link text-emphasis-dark" to={"/create-product"}>
          Create Product
        </NavLink>
      </nav>
    </>
  );
}
