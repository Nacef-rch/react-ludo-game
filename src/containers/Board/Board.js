import PlayerBase from '../../components/PlayerBase';
import TableBoard from '../Table/TableBoard';
import classes from './Board.module.css';
import { BoardColor } from '../../models/board.model';

const Board = () => {
  return (
    <div className={classes.BoardSize}>
      <PlayerBase color={BoardColor} />

      <TableBoard BoardColor={BoardColor} />
    </div>
  );
};
export default Board;
