import React from "react";
import AboutList from "../pages/AboutList";
import FeatureList from "../pages/FeatureList";
import PortfolioList from "../pages/PortfolioList";
import ServiceList from "../pages/ServiceList";
import SkillList from "../pages/SkillList";
import ExperienceList from "../pages/ExperienceList";
import TestimonialList from "../pages/TestimonialList";


export default function Contents() {
  return (
    <div>
      <FeatureList/>
      <AboutList />
      <ServiceList/>
      <SkillList/>
      <PortfolioList/>
      <ExperienceList/>
      <TestimonialList/>
    </div>
  );
}
