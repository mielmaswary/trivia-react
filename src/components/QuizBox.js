import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import shuffle from "../tools/shuffle";
import Answer from "./Answer";
import Question from "./Question";

const QuizBox = (props) => {
  const [isCorrectAnswerClicked, setIsCorrectAnswerClicked] = useState(false);
  const [chosen, setChosen] = useState(-1);

  const answers = props.incorrectAnswers;
  let shuffledAnswers = answers;
  const [isDisabled, setIsDisabled] = useState(false);
  useMemo(() => {
    answers.push(props.correctAnswer);
    shuffledAnswers = shuffle(shuffledAnswers);
  }, [props.quizData]);

  const correctAnswerIndex = shuffledAnswers.indexOf(props.correctAnswer);

  useEffect(() => {
    if (props.markAnswersStatus) {
      if (chosen === correctAnswerIndex) {
        props.setScores((pre) => pre + 1);
      }
    }
  }, [props.markAnswersStatus]);

  const answersElements = shuffledAnswers.map((answer, index) => (
    <Answer
      answer={answer}
      isCorrectAnswer={answer === props.correctAnswer}
      key={index}
      index={index}
      correctAnswer={props.correctAnswer}
      className={
        index === chosen
          ? props.markAnswersStatus
            ? "incorrect-chosen"
            : "answer-chosen"
          : "answer"
      }
      setChosen={setChosen}
      chosen={chosen}
      markAnswersStatus={props.markAnswersStatus}
      setScores={props.setScores}
      scores={props.scores}
      isCorrectAnswerChosen={index === chosen}
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
