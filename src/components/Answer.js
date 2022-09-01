import React from "react";
import { Markup } from "react-render-markup";

const Answer = (props) => {
  const isCorrectAnswer = props.isCorrectAnswer;

  return (
    <div
      className="answer"
      onClick={() => {
        isCorrectAnswer(props.correctAnswer, props.answer);
      }}
    >
      <Markup markup={props.answer} />
    </div>
  );
};

export default Answer;
