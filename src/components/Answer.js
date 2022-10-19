import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { Markup } from "react-render-markup";

const Answer = (props) => {
  //console.log(props.markAnswersStatus);
  console.log(props.scores);

  const clickAnswerActions = props.clickAnswerActions;
  const clickHandler = (i) => {
    props.setChosen(i);
  };

  let className = props.className;

  if (props.markAnswersStatus) {
    if (props.isCorrectAnswer) {
      className = "correct-answer";
    }
  }
  // useEffect(() => {
  //   if (props.isCorrectAnswerChosen && props.markAnswersStatus) {
  //     console.log("correct!");
  //     props.setScores((pre) => pre + 1);
  //   }
  // }, [props.quizBoxRendered]);
  return (
    <div className={className} onClick={() => clickHandler(props.index)}>
      <Markup markup={props.answer} />
    </div>
  );
};

export default Answer;
