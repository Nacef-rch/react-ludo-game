import React, { useEffect, useState } from 'react';

import { BoardChoseColor } from '../../services/boardView.service';
import { initList } from '../../services/table.service';

import './tableBoard.css';

const TableBoard = (props) => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    let list = initList(boardList);
    setBoardList((prevState) => {
      return [...prevState, list];
    });
    // console.log('object');
    // console.log(boardList[4][4].id);
    // console.log(getOffset(boardList[5][5].id));
  }, []);

  return (
    <React.Fragment>
      <table>
        <tbody>
          {boardList.map((itemOut, index) => {
            if (index < 15) {
              return (
                <tr key={index * 10}>
                  {boardList[index].map((itemIn) => {
                    return BoardChoseColor(itemIn, props.BoardColor);
                  })}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default TableBoard;
