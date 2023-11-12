import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../scss/compaigndetail.scss";

const CompaignDetail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const compaignList = useSelector(
    (state) => state.compaign.compaignDetailList
  );

  useEffect(() => {
    const compaignData = compaignList.find((item) => {
      return item.id === +id;
    });
    setData(compaignData);
  }, [id]);

  console.log(data);

  if (!data) {
    return <h1>no data found</h1>;
  }

  return (
    <div className="card">
      <div className="name">
        Compaign : <span> {data?.name}</span>
      </div>
      <div className="desc">Description : {data?.description}</div>
      <div className="launch">Launch Date : {data?.launchDate}</div>
      <Link to={`/`} className="back">
        Back
      </Link>
    </div>
  );
};

export default CompaignDetail;