import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../scss/sidebar.scss";

const MainComponent = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="container">
      <div className="sidebar">
        <Link
          to="createcampaign"
          className={`sidebaritem ${
            path === "/createcampaign" ? "active" : ""
          }`}
        >
          Create Compaign
        </Link>
        <Link
          to="/"
          className={`sidebaritem ${
            path !== "/createcampaign" ? "active" : ""
          }`}
        >
          Compaign list
        </Link>
        <br />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default MainComponent;
