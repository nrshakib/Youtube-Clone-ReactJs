import React from "react";
import "./Header.css";
import RightPortion from "./RightPortion";
import SearchBar from "./SearchBar";
import YtLogo from "./YtLogo";

const Header = () => {
  return (
    <div className="header">
      <YtLogo />
      <SearchBar />
      <RightPortion />
    </div>
  );
};

export default Header;
