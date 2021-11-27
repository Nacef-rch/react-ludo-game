export const initList = (list) => {
  let id = 0;
  for (var i = 0; i < 15; i++) {
    list[i] = [];
    for (var j = 0; j < 15; j++) {
      list[i][j] = {
        id: id++,
        posX: 0,
        posY: 0,
      };
    }
  }
  //console.log(list);
  return list;
};
