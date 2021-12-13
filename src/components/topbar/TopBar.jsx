import React from "react";
import "./TopBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons/";
import image from "../../logo.png";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">樓上</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContianer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContianer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContianer">
            <Settings />
            <span className="topIconBag">2</span>
          </div>
          <img src={image} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
