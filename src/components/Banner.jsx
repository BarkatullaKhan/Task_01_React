import React, { Component } from "react";
import "../styles/banner.css";

import beanz_home_banner from '../img/beanz_home_banner.webp'

const Banner = (props) => {
    
  return (
    <div className="container-fluid h-auto p-0">

      <div className="banner-container">
      <img src={beanz_home_banner} alt="Banner " className="back-image"></img>
        <div className="inner-banner">
          
          <h1>{props.banner.bannerTitle}</h1>
          <div className="banner_desc">
            
            <p>{props.banner.description}</p>
          </div>
          <div className="banner_action">
            <a
              data-sly-test={props.banner.actionText }
              href={props.banner.actionLink}
              className="action_link"
            >
              {props.banner.actionText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
