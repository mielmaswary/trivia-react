import React, { useState } from "react";
import BottomPanel from "./BottomPanel";
import OverlayBg from "./OverlayBg";
import QuizBox from "./QuizBox";

const GameBoard = (props) => {
  console.log("gameboard render");

  const quizQuestions = props.quizData;

  const quizQuestionsElements = quizQuestions.map((question, index) => (
    <QuizBox
      question={question.question.replace("&quot;", "")}
      key={index}
      incorrectAnswers={question.incorrect_answers}
      correctAnswer={question.correct_answer}
      setScores={props.setScores}
      scores={props.scores}
      isGameOver={props.isGameOver}
      quizData={props.quizData}
      defaultClass={props.defaultClass}
      setDefaultClass={props.setDefaultClass}
    />
  ));
  return (
    <div className="game-board-container">
      {quizQuestionsElements}
      <BottomPanel
        renderData={props.renderData}
        scores={props.scores}
        defaultClass={props.defaultClass}
        setDefaultClass={props.setDefaultClass}
      />
      <OverlayBg />
    </div>
  );
};

export default GameBoard;
