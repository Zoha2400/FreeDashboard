import React from "react";
import "./../../Content/Content.scss";
import { Search, Bell } from "react-bootstrap-icons";

const ProfSearch = () => {
  let complite = 11,
    inProgress = 3;

  return (
    <div className="profSearch-wrapper">
      <div className="profSearch">
        <div className="cardNav">
          <div className="search">
            {" "}
            <Search /> <input />
          </div>
          <div className="ProfileNotifications">
            <Bell />
            <div className="avatarHome"></div>
          </div>
        </div>

        <div className="Progress">
          <div className="Complited"><span>{complite}</span> <p>courses complited</p></div>
          <div className="inProgress"><span>{inProgress}</span> <p> courses in Progress</p></div>
        </div>
      </div>
    </div>
  );
};

export default ProfSearch;
