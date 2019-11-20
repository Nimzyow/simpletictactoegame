import React, { useReducer } from "react";
import GameContext from "./GameContext";
import GameReducer from "./GameReducer";
import * as Types from "./Types";

export const BoardState = props => {
  const initialState = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

  const setX = updatedSquare => {
    dispatch({ type: Types.SET_X, payload: updatedSquare });
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

  return (
    <GameContext.Provider
      value={{ squares: state.squares, setX, xIsNext: state.xIsNext }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export default BoardState;
