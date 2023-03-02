import React from "react";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import Profile from "./Profile";

const RightPortion = () => {
  return (
    <div className="rightIcons">
      <VideoCallOutlinedIcon fontSize="small" />
      <NotificationAddOutlinedIcon fontSize="small" />
      <Profile />
    </div>
  );
};

export default RightPortion;
