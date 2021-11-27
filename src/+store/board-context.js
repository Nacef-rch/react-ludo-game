import React, { useEffect, useState } from 'react';
import { initList } from '../services/table.service';

const BoardContext = React.createContext({
  board: [],
  changeCase: () => {},
});

export const BoardContextProvider = (props) => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    let list = initList(boardList);
    setBoardList((prevState) => {
      return [...prevState, list];
    });
    console.log('object');
    // console.log(boardList[4][4].id);
    // console.log(getOffset(boardList[5][5].id));
  }, []);

  const changeCase = (posX, posY) => {
    setBoardList((prevState) => {
      return [...prevState, (boardList[posX][posY].id = 'X')];
    });
  };

  return (
    <BoardContext.Provider value={{ board: boardList, changeCase: changeCase }}>
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
