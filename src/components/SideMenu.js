import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const SideMenu = ({ nextSection, setNextSection }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const history = useHistory();

  const play = () => {
    setOpenedMenu(!openedMenu);
    setTimeout(() => {
      setNextSection(true);
    }, 350);
    history.push("/arena");
  };

  return (
    <>
      <div
        onClick={() => setOpenedMenu(!openedMenu)}
        className={`hamburger hamburger--elastic js-hamburger hamburger-avalon${
          openedMenu ? " is-active" : ""
        }`}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      <ul className={`menu${openedMenu ? " show" : ""}`}>
        <li>home</li>
        <li className="play" onClick={play}>jogar!</li>
        <li>contato</li>
      </ul>
    </>
  );
};

export default SideMenu;
