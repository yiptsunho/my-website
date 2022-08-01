import { useContext } from "react";
import { ticContext } from "../Pages/TicTacToe";

const Prompt = () => {

    const { turn } = useContext(ticContext)

    return (
      <>
        <h2>{turn}'s turn</h2>
      </>
    )
  };
  
export default Prompt