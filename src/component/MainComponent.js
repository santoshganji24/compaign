import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../scss/sidebar.scss";

const MainComponent = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Link to="createcampaign" className="sidebaritem">
          Create Compaign
        </Link>
        <Link to="/" className="sidebaritem">
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
