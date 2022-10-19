import React from "react";

const BottomPanel = (props) => {
  const playAgain = () => {
    window.location.reload(false);
  };

  return (
    <div className="bottom-panel">
      <div className="h4">You scored {props.scores}/5 correct answers</div>
      <button onClick={props.markCorrectAnswer}>Check your answers!</button>
      <button onClick={playAgain}>Play again</button>
    </div>
  );
};

export default BottomPanel;
