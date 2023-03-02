import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="searchBox">
        <input className="inputBox" type="text" placeholder="Search" />
        <div className="searchIcon">
          <SearchRoundedIcon fontSize="small"/>
        </div>
      </div>
      <div className="voiceSearch">
        <KeyboardVoiceRoundedIcon fontSize="small" />
      </div>
    </div>
  );
};

export default SearchBar;
