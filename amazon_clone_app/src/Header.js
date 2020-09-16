import React from "react";
import "./Header";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
        />
        <div className="header__nav">
          <div className="header__options">
            <span className="header__optionLineOne">
              Hello User
            </span>
          </div>
          <div className="header__option">
            <span className="header__optionLineTwo">
              Orders
            </span>
          </div>
          <div className="header__option">
            <span className="header__optionLineThree">
              Prime
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
