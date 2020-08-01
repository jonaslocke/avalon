import React, { useState, useEffect } from "react";

import "./assets/styles/app.scss";

import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Loading from "./components/Loading";
import Arena from "./components/Arena";
import Contact from "./components/Contact";
import AddCardName from "./components/AddCardName";

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
    // <Router>
    //   <Route exact path="/" render={(props) => <Home {...props} nextSection={nextSection} setNextSection={setNextSection} />} />
    //   <Route path="/arena" component={Arena} />
    //   <Route path="/contact" component={Contact} />
    // </Router>
    <AddCardName />
  );
};

export default App;
