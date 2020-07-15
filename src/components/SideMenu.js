import React, { useState, useEffect } from "react";

const SideMenu = ({ setNextSection, menuItens }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  

  const play = () => {
    setOpenedMenu(!openedMenu);
    setTimeout(() => {
      setNextSection(true);
    }, 350);
  };

  return (
    <React.Fragment>
      <div
        onClick={() => setOpenedMenu(!openedMenu)}
        className={`hamburger hamburger--elastic js-hamburger hamburger-avalon ${
          openedMenu ? "is-active" : null
        }`}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      <ul className={`menu ${openedMenu ? "show" : null}`}>
        {menuItens.map((item) => (
          <li className={item.label === "jogar!" ? "play" : null} key={item.id}>
            <a
              onClick={item.label === "jogar!" ? () => play() : null}
              href={item.link}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SideMenu;
