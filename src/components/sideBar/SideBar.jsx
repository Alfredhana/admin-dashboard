import React from "react";
import "./SideBar.css";
import { LineStyle, Build, TrendingUp } from "@material-ui/icons";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">目錄</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <LineStyle className="sidebarIcon" />
              主頁
            </li>
            <li className="sidebarItem">
              <Build className="sidebarIcon" />
              工具
            </li>
            <li className="sidebarItem">
              <TrendingUp className="sidebarIcon" />
              銷售額
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
