import React from "react";
import { useMemo } from "react";
import { useRef, useEffect } from "react";
import shuffle from "../tools/shuffle";
import Answer from "./Answer";
import Question from "./Question";

const QuizBox = (props) => {
  const answers = props.incorrectAnswers;
  let shuffledAnswers = answers;

  useMemo(() => {
    answers.push(props.correctAnswer);
    shuffledAnswers = shuffle(shuffledAnswers);
  }, []);

  const isCorrectAnswer = (correctAnswer, chosenAnswer) => {
    if (correctAnswer === chosenAnswer) {
      props.setScores((pre) => pre + 1);
    }
  };

  const answersElements = shuffledAnswers.map((answer, index) => (
    <Answer
      answer={answer}
      key={index}
      isCorrectAnswer={isCorrectAnswer}
      correctAnswer={props.correctAnswer}
    />
  ));
  return (
    <div className="quiz-box-container">
      <Question question={props.question} />
      <div className="answers-container">{answersElements}</div>

      <hr className="divider"></hr>
    </div>
  );
};

export default QuizBox;
