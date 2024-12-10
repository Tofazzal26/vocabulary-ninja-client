import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
      <h1>footer</h1>
    </div>
  );
};

export default Root;
