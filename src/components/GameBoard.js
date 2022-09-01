import React, { useState } from "react";
import BottomPanel from "./BottomPanel";
import OverlayBg from "./OverlayBg";
import QuizBox from "./QuizBox";

const GameBoard = (props) => {
  const quizQuestions = props.quizData;
  const [scores, setScores] = useState(0);

  const quizQuestionsElements = quizQuestions.map((question, index) => (
    <QuizBox
      question={question.question.replace("&quot;", "")}
      key={index}
      incorrectAnswers={question.incorrect_answers}
      correctAnswer={question.correct_answer}
      setScores={setScores}
      isGameOver={props.isGameOver}
    />
  ));
  return (
    <div className="game-board-container">
      {quizQuestionsElements}
      <BottomPanel renderData={props.renderData} scores={scores} />
      <OverlayBg />
    </div>
  );
};

export default GameBoard;
