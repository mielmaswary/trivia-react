import React from "react";
import BottomPanel from "./BottomPanel";
import OverlayBg from "./OverlayBg";
import QuizBox from "./QuizBox";

const GameBoard = (props) => {
  const quizQuestions = props.quizData;
  const quizQuestionsElements = quizQuestions.map((question, index) => (
    <QuizBox
      question={question.question.replace("&quot;", "")}
      key={index}
      incorrectAnswers={question.incorrect_answers}
      correctAnswer={question.correct_answer}
    />
  ));
  console.log(quizQuestionsElements);
  return (
    <div className="game-board-container">
      {quizQuestionsElements}
      <BottomPanel renderData={props.renderData} />
      <OverlayBg />
    </div>
  );
};

export default GameBoard;
