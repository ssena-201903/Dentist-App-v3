import React from "react";
import "./HeaderMenu.scss";

const HeaderMenu = ({ text, selectedMenuItem, Onclick }) => {
  return (
    <div className="header-menu" onClick={Onclick}>
      <span>
        <i className="fa-solid fa-arrow-left"></i>
      </span>
      <h5>{selectedMenuItem || text}</h5>
    </div>
  );
};

export default HeaderMenu;
