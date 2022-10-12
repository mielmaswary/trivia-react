import React, { useState } from "react";
import { useEffect } from "react";
import { Markup } from "react-render-markup";
//import useForceUpdate from "use-force-update";

const Answer = (props) => {
  const clickAnswerActions = props.clickAnswerActions;
  const clickHandler = (i) => {
    props.setChosen(i);
  };

  // const className = props.markAnswersStatus
  //   ? props.isCorrectAnswer
  //     ? "correct-answer"
  //     : props.chosen
  //     ? "correct-chosen"
  //     : props.className
  //   : props.className;

  let className = props.className;
  if (props.markAnswersStatus) {
    if (props.isCorrectAnswer) {
      className = "correct-answer";
    }
  }

  return (
    <div
      // className={
      //   props.isCorrectAnswer && props.markAnswersStatus
      //     ? "correct-answer"
      //     : props.className
      // }
      className={className}
      onClick={() => clickHandler(props.index)}
    >
      <Markup markup={props.answer} />
    </div>
  );
};

export default Answer;
