import { useState, useEffect, createContext, useCallback } from 'react';
import Board from "../js/Board";
import Prompt from "../js/Prompt";
import End from "../js/End";
import { FIRST_TURN, STATE_ARRAY, WIN_MESSAGE, DRAW_MESSAGE } from '../js/Constants';

export const ticContext = createContext()

const TicTacToe = () => {

  const [turn, setTurn] = useState(FIRST_TURN)
  const [state, setState] = useState(STATE_ARRAY)
  
  const haveWinner = useCallback(() => {
    var win = false

    if (state[0] === state[1] && state[1] === state[2] && state[0] !== "-") {
      win = true
      return win
    } else if (state[3] === state[4] && state[4] === state[5] && state[3] !== "-") {
      win = true
      return win
    } else if (state[6] === state[7] && state[7] === state[8] && state[6] !== "-") {
      win = true
      return win
    } else if (state[0] === state[3] && state[3] === state[6] && state[0] !== "-") {
      win = true
      return win
    } else if (state[1] === state[4] && state[4] === state[7] && state[1] !== "-") {
      win = true
      return win
    } else if (state[2] === state[5] && state[5] === state[8] && state[2] !== "-") {
      win = true
      return win
    } else if (state[0] === state[4] && state[4] === state[8] && state[0] !== "-") {
      win = true
      return win
    } else if (state[2] === state[4] && state[4] === state[6] && state[2] !== "-") {
      win = true
      return win
    }
  }, [state])

  function draw() {
    var draw = false
    if (haveWinner() !== true && state.every(item => item !== "-")) {
      draw = true
    }
    return draw
  }

  useEffect(() => {
    if (haveWinner()) {
      var winner = (turn === "X") ? "O" : "X"
      window.alert(winner + WIN_MESSAGE)
      window.location.reload()
    } else if (draw()) {
      window.alert(DRAW_MESSAGE)
      window.location.reload()
    }
  }, [state])

  return (
    <div className="container-fluid ticTacToe">
        <div className="row">
          <ticContext.Provider value={{ turn, setTurn, state, setState }}>
            <Prompt />
            <Board />
            <End />
          </ticContext.Provider>
          {/*
            <Prompt turn={turn}/>
            <Board state={state} setState={setState} turn={turn} setTurn={setTurn}/>
            <End />
          */}
        </div>
    </div>
  )
};

export default TicTacToe;
