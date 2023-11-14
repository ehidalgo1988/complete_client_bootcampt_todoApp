import React from "react";
import SideNav from "./SideNav";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="col-md-2">
        <SideNav />
      </div>
      <div className="col-md-10">{children}</div>
    </>
  );
};
