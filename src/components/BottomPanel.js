import React from "react";

const BottomPanel = (props) => {
  const clickHandler = () => {
    window.location.reload(false);
  };
  return (
    <div className="bottom-panel">
      <div className="h4">You scored {props.scores}/5 correct answers</div>
      <button onClick={clickHandler}>Play again</button>
    </div>
  );
};

export default BottomPanel;
