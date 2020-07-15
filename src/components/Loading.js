import React from "react";
import LoadingGif from "../assets/imgs/loading.gif";

const Loading = () => {
  return <img src={LoadingGif} alt="Carregando..." style={{height: 100}}></img>;
};

export default Loading;
