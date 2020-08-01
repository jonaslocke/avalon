import React from "react";
import SideMenu from "./SideMenu";
import MainLogo from "./MainLogo";

const Home = ({ nextSection, setNextSection, menuItens }) => {
  return (
    <>
      <div className={`splash${nextSection ? " hide" : ''}`}>
        <SideMenu
          nextSection={nextSection}
          setNextSection={setNextSection}
          menuItens={menuItens}
        />
        <MainLogo />
      </div>
    </>
  );
};

export default Home;
