import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../scss/sidebar.scss";
import { useDispatch } from "react-redux";
import { companyDetails } from "../redux/compaignSlice";

const MainComponent = () => {
  const location = useLocation();
  const path = location.pathname;
  const [selectCompany, setSelectCompany] = useState("compaignDetailList");

  const navigate = useNavigate();
  const handleCompany = (e) => {
    setSelectCompany(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(companyDetails(selectCompany));
    navigate("/");
  }, [selectCompany]);

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
        <select value={selectCompany} onChange={handleCompany}>
          <option value="companyone">companyone</option>
          <option value="companytwo">companytwo</option>
          <option value="companythree">companythree</option>

          <option value="compaignDetailList">compaignDetailList</option>
        </select>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default MainComponent;
