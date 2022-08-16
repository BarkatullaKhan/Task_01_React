import React, { Component } from "react";
import "../styles/banner.css";
import { useNavigate } from "react-router-dom";

const Banner = (props) => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid h-auto p-0 ">
      <div className="banner-container">
        <img
          src={
            process.env.REACT_APP_HOST +
            ":" +
            process.env.REACT_APP_PORT +
            props.banner.bannerImage
          }
          alt="Banner "
          className="back-image"
        ></img>
        <div className="inner-banner">
          <h1>{props.banner.bannerTitle}</h1>
          <div className="banner_desc">
            <p>{props.banner.description}</p>
          </div>
          {props.banner.actionText !== undefined ? (
            <div
              className="banner_action"
              onClick={() => navigate(props.banner.actionLink)}
            >
              <a
                data-sly-test={props.banner.actionText}
                // href={props.banner.actionLink}
                className="action_link"
                style={{ cursor: "pointer" }}
              >
                {props.banner.actionText}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
