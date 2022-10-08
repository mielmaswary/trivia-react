import React, { useState } from "react";
import { useEffect } from "react";
import { Markup } from "react-render-markup";
//import useForceUpdate from "use-force-update";

const Answer = (props) => {
  console.log(props.index);
  console.log("current is " + props.current);
  const clickAnswerActions = props.clickAnswerActions;
  const [isChosen, setIsChosen] = useState(false);

  const clickHandler = (i) => {
    props.setCurrent(i);
  };

  return (
    <div className={props.className} onClick={() => clickHandler(props.index)}>
      <Markup markup={props.answer} />
    </div>
  );
};

export default Answer;
