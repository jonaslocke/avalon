import React from "react";
import AvalonLogo from "../assets/imgs/avalonLogo.svg";

const MainLogo = () => {
  return (
    <React.Fragment>
      <a href="./" id="arenaButton"></a>
      <div className="logo">
        <img src={AvalonLogo} alt="" />
      </div>
    </React.Fragment>
  );
};

export default MainLogo;
