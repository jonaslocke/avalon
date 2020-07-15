import React, { useState, useEffect } from "react";
// import "./App.css";
import "./assets/styles/app.scss";
import MainLogo from "./components/MainLogo";
import SideMenu from "./components/SideMenu";
import axios from "axios";
import Loading from "./components/Loading";

const App = () => {
  const [nextSection, setNextSection] = useState(false);
  const [menuItens, setMenuItens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const menuItens = async () => {
      setIsLoading(true);
      const result = await axios(`http://localhost:1337/menu-itens`);
      setMenuItens(result.data);
      setIsLoading(false);
    };
    menuItens();
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <div className={`splash ${nextSection ? "hide" : null}`}>
      <SideMenu
        nextSection={nextSection}
        setNextSection={setNextSection}
        menuItens={menuItens}
      />
      <MainLogo />
    </div>
  );
};

export default App;
