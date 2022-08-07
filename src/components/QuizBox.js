import React from "react";
import Answer from "./Answer";
import Question from "./Question";

const QuizBox = (props) => {
  const answersElements = props.incorrectAnswers.map((answer) => (
    <Answer answer={answer} />
  ));
  return (
    <div className="quiz-box-container">
      <Question question={props.question} />
      <div className="answers-container">
        {answersElements}
        <Answer answer={props.correctAnswer} />
      </div>

      <hr className="divider"></hr>
    </div>
  );
};

export default QuizBox;
