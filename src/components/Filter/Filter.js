import React from "react";
import "./Filter.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Filter = () => {
  return (
    <div className="filter">
      <div className="single-filter">
        <span className="filter-item">All</span>
        <span className="filter-item">JavaScript</span>
        <span className="filter-item">ES6</span>
        <span className="filter-item">ReactJs</span>
        <span className="filter-item">NodeJs</span>
        <span className="filter-item">ExpressJs</span>
        <span className="filter-item">MongoDB</span>
        <span className="filter-item">NextJs</span>
        <span className="filter-item">HTML</span>
      </div>
    </div>
  );
};

export default Filter;
