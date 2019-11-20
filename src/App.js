import React from "react";
import Game from "./Components/Game";
import GameState from "./Context/Game/GameState";
import "./App.css";

const App = () => {
  return (
    <GameState>
      <Game />
    </GameState>
  );
};

export default App;
