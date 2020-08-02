import React, { useState } from "react";
import AvalonLogo from "./AvalonLogo";

const NavBar = () => {
  const [navbarHover, setNavbarHover] = useState(false);
  return (
    <div
      className="nav"
      onMouseEnter={() => setNavbarHover(true)}
      onMouseOut={() => setNavbarHover(false)}
    >
      <div className="hamburger hamburger--elastic js-hamburger hamburger-avalon">
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      <AvalonLogo color={navbarHover ? "#ffffff" : "#ff2ea2"} ratio={0.09} />
    </div>
  );
};

export default NavBar;
