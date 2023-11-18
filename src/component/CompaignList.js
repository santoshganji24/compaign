import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../scss/compaignlist.scss";
import moment from "moment";

const CompaignList = () => {
  let selectedCompany = useSelector((state) => state.compaign.selectCompany);
  const comaignList = useSelector((state) => state.compaign[selectedCompany]);

  if (comaignList?.length == 0) {
    return <h1>no data found</h1>;
  }

  return (
    <div className="card_container">
      {comaignList?.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="name">
              Compaign :<span> {item.name}</span>
            </div>
            <div className="launch">
              {moment(item.launchDate).format("DD/MM/YYYY")}
            </div>
            <div style={{ display: "flex" }}>
              <Link to={`/${item.id}`} key={index} className="view">
                View
              </Link>
              <Link to={`/edit/${item.id}`} key={index} className="view">
                Edit
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompaignList;
