

const UpperColor = [97, 82, 67, 52, 37, 22, 8];
const DownColor = [127, 142, 157, 172, 187, 202, 216];
export const BoardChoseColor = (itemIn, BoardColor, caseInputRef) => {


  if ((itemIn.id > 105 && itemIn.id < 112) || itemIn.id === 90)
    return (
      <th
        key={itemIn.id}
        style={{ backgroundColor: BoardColor.Left }}
      >
        {itemIn.id}
      </th>
    );
  if ((itemIn.id > 112 && itemIn.id < 119) || itemIn.id === 134)
    return (
      <th
        key={itemIn.id}
        style={{ backgroundColor: BoardColor.Right }}
       
      >
        {itemIn.id}
      </th>
    );
  if (UpperColor.includes(itemIn.id))
    return (
      <th
        key={itemIn.id}
        style={{ backgroundColor: BoardColor.Up }}
      
      >
        {itemIn.id}
      </th>
    );
  if (DownColor.includes(itemIn.id))
    return (
      <th
        key={itemIn.id}
        style={{ backgroundColor: BoardColor.Down }}
      
      >
        {itemIn.id}
      </th>
    );

  return (
    <th key={itemIn.id} >
      {itemIn.id}
    </th>
  );
};
