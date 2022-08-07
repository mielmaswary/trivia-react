import React from "react";
import OverlayBg from "./OverlayBg";
const StartGame = (props) => {
  const clickHandle = () => {
    props.renderData();
    setTimeout(props.setIsGameOver(false), 5000);
  };
  return (
    <div className="start-game-container">
      <h2>Quizzical</h2>
      <h4>Some description if needed</h4>
      <button onClick={clickHandle}>Start quiz</button>
      <OverlayBg />
    </div>
  );
};

export default StartGame;
