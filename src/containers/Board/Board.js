import React from 'react';
import PlayerBase from '../../components/PlayerBase';
import { BoardContextProvider } from '../../+store/board-context.js';
import TableBoard from '../Table/TableBoard';
import classes from './Board.module.css';
import { BoardColor } from '../../constants/board.constant';

const Board = () => {
  return (
    <BoardContextProvider>
      <div className={classes.BoardSize}>
        <PlayerBase color={BoardColor} />
        <TableBoard BoardColor={BoardColor} />
      </div>
    </BoardContextProvider>
  );
};
export default Board;
