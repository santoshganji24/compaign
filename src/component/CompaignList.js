import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../scss/compaignlist.scss";
import moment from "moment";
import { loadFromLocalStorage } from "../utils/reusable/storage";

const CompaignList = () => {
  const comaignList = loadFromLocalStorage();

  useEffect(() => {
    return () => {
      loadFromLocalStorage();
    };
  }, []);

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
            <Link to={`/${item.id}`} key={index} className="view">
              View
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CompaignList;
