import * as Types from "./Types";

export default (state, action) => {
  switch (action.type) {
    case Types.RESET_GAME:
      return {
        ...state,
        squares: Array(9).fill(null)
      };

    case Types.SET_X:
      console.log("action.payload=" + action.payload);
      return {
        ...state,
        squares: action.payload,
        xIsNext: !state.xIsNext
      };

    default:
      return state;
  }
};
