import React, { useState } from "react";
import { Markup } from "react-render-markup";
//import useForceUpdate from "use-force-update";

const Answer = (props) => {
  const [rerender, setRerender] = useState(false);

  console.log("render answer!");
  const clickAnswerActions = props.clickAnswerActions;
  const [answerClassName, setAnswerClassName] = useState("answer");
  console.log(answerClassName);
  return (
    <div
      className={answerClassName}
      onClick={() => {
        clickAnswerActions(props.correctAnswer, props.answer);
        if (props.correctAnswer === props.answer)
          setAnswerClassName("correct-chosen");
        setRerender(!rerender);
      }}
    >
      <Markup markup={props.answer} />
    </div>
  );
};

export default Answer;
