import React from "react";
import "./../Content.scss";
import Boy from "./../../../svg-img/Boy.svg";
import ProfSearch from "./profSearch";

const Header = () => {
  const name = "Zoha";

  return (
    <div className="Header">
      <div className="hello">
        <img src={Boy} />
        <div className={"Hello-block"}>
          <span className="text">
            <p>Hello {name}!</p>
            <p>It's good to see you again!</p>
          </span>
        </div>
      </div>
      <ProfSearch />
    </div>
  );
};

export default Header;
