import React from "react";
import OverlayBg from "./OverlayBg";
import Loader from "./Loader";
const StartGame = (props) => {
  const clickHandle = () => {
    props.renderData();
    setTimeout(props.setIsGameOver(false), 5000);
  };
  return (
    <div className="start-game-container">
      <h2>Quizzical</h2>
      <h4>Play with your knowledge</h4>
      <button onClick={clickHandle}>Start quiz</button>
      <OverlayBg />
    </div>
  );
};

export default StartGame;
