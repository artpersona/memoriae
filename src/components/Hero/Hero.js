import React from "react";
import "./Hero.css";
import { Button } from "../Buttons/Button";
function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__wrapper">
        <div className="hero__info">
          <h1 className="hero__title">Let us know your story!</h1>
          <p className="hero__title_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos,
            quod laudantium numquam itaque est placeat rem ab pariatur eum
            dolores. Dolorum assumenda ipsa beatae alias libero illum! Dicta,
            nesciunt.
          </p>
          <div className="button__group">
            <Button
              to="/sign-up"
              buttonStyle="btn-outline"
              buttonSize="btn-large"
            >
              Learn More
            </Button>
            <Button
              to="/sign-up"
              buttonStyle="btn-primary"
              buttonSize="btn-large"
            >
              Get Started
            </Button>
          </div>
        </div>
        <img
          src="/hero_img.jpg"
          alt="thinkingman_jpg"
          className="hero__image"
        />
      </div>
    </div>
  );
}

export default Hero;
