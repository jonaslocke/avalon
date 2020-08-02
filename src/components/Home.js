import React from "react";
import SideMenu from "./SideMenu";
import AvalonLogo from "./AvalonLogo";

const Home = ({ nextSection, setNextSection, menuItens }) => {
  return (
    <>
      <div className={`splash${nextSection ? " hide" : ''}`}>
        <SideMenu
          nextSection={nextSection}
          setNextSection={setNextSection}
          menuItens={menuItens}
        />
        <AvalonLogo ratio={0.5}/>
      </div>
    </>
  );
};

export default Home;
