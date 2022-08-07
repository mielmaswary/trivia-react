import React, { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import StartGame from "./components/StartGame";

const App = () => {
  const [isGameOver, setIsGameOver] = useState(true);
  const [quizData, setQuizData] = useState([]);

  const renderData = () => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => setQuizData(data.results));
  };
  // useEffect(() => {}, []);

  return (
    <div className="main-container">
      {isGameOver ? (
        <StartGame
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          renderData={renderData}
        />
      ) : (
        <GameBoard quizData={quizData} renderData={renderData} />
      )}
    </div>
  );
};
export default App;
