import React from "react";
import "./Landing.css";
import CardSection from "../components/Landing/Cards";
import Hero from "../components/Hero/Hero";
function Landing() {
  return (
    <div className="wrapper">
      <Hero />
      <CardSection></CardSection>
    </div>
  );
}

export default Landing;
