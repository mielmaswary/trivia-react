import React, { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import Loader from "./components/Loader";
import StartGame from "./components/StartGame";

const App = () => {
  const [isGameOver, setIsGameOver] = useState(true);
  const [quizData, setQuizData] = useState([]);
  const [isGameBoardLoaded, setIsGameBoardLoaded] = useState(false);
  const [scores, setScores] = useState(0);
  const [defaultClass, setDefaultClass] = useState(false);

  const renderData = () => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => {
        setQuizData(data.results);
        setIsGameBoardLoaded(true);
        setScores(0);
      });
  };

  return (
    <div className="main-container">
      {isGameOver ? (
        <StartGame
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          renderData={renderData}
        />
      ) : (
        <div>
          {!isGameBoardLoaded ? (
            <Loader />
          ) : (
            <GameBoard
              quizData={quizData}
              renderData={renderData}
              isGameOver={isGameOver}
              setScores={setScores}
              scores={scores}
              defaultClass={defaultClass}
              setDefaultClass={setDefaultClass}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default App;
