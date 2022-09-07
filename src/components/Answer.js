import React, { useState } from "react";
import { useEffect } from "react";
import { Markup } from "react-render-markup";
//import useForceUpdate from "use-force-update";

const Answer = (props) => {
  console.log("answer render");
  const clickAnswerActions = props.clickAnswerActions;
  const [answerClassName, setAnswerClassName] = useState("answer");
  console.log(answerClassName);

  return (
    <div
      className={answerClassName}
      onClick={() => {
        if (props.correctAnswer === props.answer) {
          setAnswerClassName("correct-answer");
          clickAnswerActions();
          console.log(answerClassName);
        }
      }}
    >
      <Markup markup={props.answer} />
    </div>
  );
};

export default Answer;
