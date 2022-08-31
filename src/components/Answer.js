import React from "react";
import { Markup } from "react-render-markup";

const Answer = (props) => {
  const clickHandler = () => {
    alert(1);
  };
  return (
    <div className="answer" onClick={clickHandler}>
      <Markup markup={props.answer} />
    </div>
  );
};

export default Answer;
