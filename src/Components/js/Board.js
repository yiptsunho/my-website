import { useContext } from 'react';
import { ticContext } from '../Pages/TicTacToe';
import Square from './Square';

const Board = () => {

  const { state, setState, turn, setTurn } = useContext(ticContext)

  //console.log({turn})
  //console.log({state})
  
  return (
  <ticContext.Provider value={{ state, setState, turn, setTurn }}>
    <div className="container">
      <div className="btn-group-vertical">
        <div className="btn-group">
              <Square number={0}/>
              <Square number={1}/>
              <Square number={2}/>
        </div>
        <div className="btn-group">
              <Square number={3}/>
              <Square number={4}/>
              <Square number={5}/>
        </div>
        <div className="btn-group">
              <Square number={6}/>
              <Square number={7}/>
              <Square number={8}/>
        </div>
      </div>
    </div>
  </ticContext.Provider>
  )
};
  
export default Board;