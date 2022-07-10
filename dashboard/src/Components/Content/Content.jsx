import React from "react";
import "./Content.scss";
import { Grid } from "@mui/material";
import Header from "./Header/Header";

const Content = () => {
  return (
    <div className="centrier">
      <div className="Content-wrapper">
        <div className="content">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Content;
