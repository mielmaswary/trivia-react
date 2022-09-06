import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import shuffle from "../tools/shuffle";
import Answer from "./Answer";
import Question from "./Question";

const QuizBox = (props) => {
  const [isCorrectAnswerClicked, setIsCorrectAnswerClicked] = useState(false);
  const answers = props.incorrectAnswers;
  let shuffledAnswers = answers;
  const [isDisabled, setIsDisabled] = useState(false);
  useMemo(() => {
    answers.push(props.correctAnswer);
    shuffledAnswers = shuffle(shuffledAnswers);
  }, [props.quizData]);

  const clickAnswerActions = (correctAnswer, chosenAnswer) => {
    if (correctAnswer === chosenAnswer) {
      props.setScores((pre) => pre + 1);
      setIsCorrectAnswerClicked(true);
      setIsDisabled(true);
    }
  };

  const answersElements = shuffledAnswers.map((answer, index) => (
    <Answer
      answer={answer}
      key={index}
      clickAnswerActions={clickAnswerActions}
      correctAnswer={props.correctAnswer}
      isCorrectAnswerClicked={isCorrectAnswerClicked}
    />
  ));
  return (
    <div className={"quiz-box-container" + (isDisabled ? " disabled" : "")}>
      <Question question={props.question} />
      <div className="answers-container">{answersElements}</div>

      <hr className="divider"></hr>
    </div>
  );
};

export default QuizBox;
