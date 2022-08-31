import React from "react";
import shuffle from "../tools/shuffle";
import Answer from "./Answer";
import Question from "./Question";

const QuizBox = (props) => {
  const answers = props.incorrectAnswers;
  answers.push(props.correctAnswer);
  const shuffledAnswers = shuffle(answers);
  console.log(shuffledAnswers);
  console.log(props.correctAnswer);

  const answersElements = shuffledAnswers.map((answer, index) => (
    <Answer answer={answer} key={index} />
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
