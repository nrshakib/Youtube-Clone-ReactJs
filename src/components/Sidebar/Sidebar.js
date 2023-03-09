import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <p className="ptag">
          <HomeIcon fontSize="" />
          <span className="sidebar-text">Home</span>
        </p>
        <p className="ptag">
          <ExploreOutlinedIcon fontSize="" />
          <span className="sidebar-text">Explore</span>
        </p>
        <p className="ptag">
          <SubscriptionsOutlinedIcon fontSize="" />
          <span className="sidebar-text">Subscription</span>
        </p>
        <p className="ptag">
          <VideoLibraryOutlinedIcon fontSize="" />
          <span className="sidebar-text">Library</span>
        </p>
        <p className="ptag">
          <HistoryOutlinedIcon fontSize="" />
          <span className="sidebar-text">History</span>
        </p>
        <p className="ptag">
          <SlideshowOutlinedIcon fontSize="" />
          <span className="sidebar-text">Your Videos</span>
        </p>
        <p className="ptag">
          <ScheduleOutlinedIcon fontSize="" />
          <span className="sidebar-text">Watch Later</span>
        </p>
        <p className="ptag">
          <ThumbUpOutlinedIcon fontSize="" />
          <span className="sidebar-text">Liked Videos</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
