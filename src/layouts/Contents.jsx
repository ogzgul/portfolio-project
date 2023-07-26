import React from "react";
import AboutList from "../pages/AboutList";
import FeatureList from "../pages/FeatureList";
import PortfolioList from "../pages/PortfolioList";


export default function Contents() {
  return (
    <div>
      <FeatureList/>
      <AboutList />
      <PortfolioList/>
    </div>
  );
}
