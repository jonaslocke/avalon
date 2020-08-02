import React from "react";
import AvalonLogo from "./AvalonLogo";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1>
          Tentamos, mas não conseguimos encontrar o que você procura. <small>(Error 404)</small>
        </h1>
        <h2>Que tal tentarmos do início?</h2>
        <AvalonLogo color={"#ff2ea2"} ratio={0.2} />
      </div>
      <div className="not-found__background"></div>
    </>
  );
};

export default NotFound;
