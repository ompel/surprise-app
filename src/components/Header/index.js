import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./header.scss";

const getPageName = (pathname) => {
  switch (pathname) {
    case "/":
      return "Home";
    case "/stats":
      return "Stats";
    case "/response":
      return "Response";

    default:
      return "";
  }
};

const HeaderLink = ({ pathname }) => {
  switch (pathname) {
    case "/":
      return (
        <Link className="header__header-link" to="/stats">
          Statistics
        </Link>
      );

    default:
      return (
        <Link className="header__header-link" to="/">
          Home
        </Link>
      );
  }
};

const Header = () => {
  const location = useLocation();
  return (
    <div className="header">
      <span className="header__page-name">
        {getPageName(location.pathname)}
      </span>
      <HeaderLink pathname={location.pathname} />
    </div>
  );
};

export default Header;
