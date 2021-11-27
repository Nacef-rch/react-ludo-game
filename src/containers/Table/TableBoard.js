import React, { useContext } from 'react';
import BoardContext from '../../+store/board-context';

import { BoardChoseColor } from '../../services/boardView.service';

import './tableBoard.css';

const TableBoard = (props) => {
  const ctx = useContext(BoardContext);
  const showText = () => {
    ctx.changeCase(4, 4);
  };

  return (
    <React.Fragment>
      <table>
        <tbody>
          {ctx.board.map((itemOut, index) => {
            if (index < 15) {
              return (
                <tr key={index * 10}>
                  {ctx.board[index].map((itemIn) => {
                    return BoardChoseColor(itemIn, props.BoardColor);
                  })}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <button onClick={showText}>onClick</button>
    </React.Fragment>
  );
};
export default TableBoard;
