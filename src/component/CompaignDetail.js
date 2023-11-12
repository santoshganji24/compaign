import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../scss/compaigndetail.scss";
import moment from "moment";
import { loadFromLocalStorage } from "../utils/reusable/storage";

const CompaignDetail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const compaignList = loadFromLocalStorage();

  useEffect(() => {
    const compaignData = compaignList.find((item) => {
      return item.id === +id;
    });
    setData(compaignData);
  }, [id]);

  if (!data) {
    return <h1>no data found</h1>;
  }

  return (
    <div className="card">
      <div className="name">
        Compaign : <span> {data?.name}</span>
      </div>
      <div className="desc">Description : {data?.description}</div>
      <div className="launch">
        Launch Date : {moment(data?.launchDate).format("DD/MM/YYYY")}
      </div>
      <Link to={`/`} className="back">
        Back
      </Link>
    </div>
  );
};

export default CompaignDetail;
