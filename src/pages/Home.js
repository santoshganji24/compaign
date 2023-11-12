import React from "react";
import { Route, Routes } from "react-router-dom";
import MainComponent from "../component/MainComponent";
import CompaignList from "../component/CompaignList";
import CompaignDetail from "../component/CompaignDetail";
import CompaignForm from "../component/CompaignForm";

const Home = () => {
  return (
    <Routes>
      <Route element={<MainComponent />}>
        <Route index element={<CompaignList />} />
        <Route path=":id" element={<CompaignDetail />} />
        <Route path="/createcampaign" element={<CompaignForm />} />
        <Route path="/compaignlist" element={<CompaignList />} />
      </Route>
    </Routes>
  );
};

export default Home;
