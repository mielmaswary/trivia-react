import React from "react";

const BottomPanel = (props) => {
  return (
    <div className="bottom-panel">
      <div className="h4">You scored 3/5 correct answers</div>
      <button onClick={props.renderData}>Play again</button>
    </div>
  );
};

export default BottomPanel;
