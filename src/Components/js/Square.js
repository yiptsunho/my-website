import { useContext } from "react";
import { ticContext } from "../../pages/TicTacToe";

const Square = ({ number }) => {

  const { state, setState, turn, setTurn } = useContext(ticContext)

  function changeState() {
    var newState = [...state]
    if (newState[number] === "-") {
      newState[number] = turn
      setState(newState)
      changeTurn()
    } else {
      return
    }
  }

  function changeTurn () {
    setTurn(turn === "X" ? "O" : "X")
  }

  return (
      <button type="button" className="btn btn-light btn-lg" onClick={changeState}>{state[number]}</button>
  )
};
  
export default Square