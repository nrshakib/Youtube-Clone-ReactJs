import React from "react";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import Profile from "./Profile";

const RightPortion = () => {
  return (
    <div className="rightIcons">
      <div className="rightIcon">
        <VideoCallOutlinedIcon fontSize="small" />
      </div>
      <div className="rightIcon">
        <NotificationAddOutlinedIcon fontSize="small" />
      </div>
      <div className="rightIcon">
        <Profile />
      </div>
    </div>
  );
};

export default RightPortion;
