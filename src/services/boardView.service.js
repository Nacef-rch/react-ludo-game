import { useRef } from 'react';

const UpperColor = [97, 82, 67, 52, 37, 22, 8];
const DownColor = [127, 142, 157, 172, 187, 202, 216];
export const BoardChoseColor = (itemIn, BoardColor) => {
  const inputRef = useRef();

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollHandler, true);
  //   return () => {
  //     window.removeEventListener('scroll', scrollHandler, true);
  //   };
  // }, []);

  const scrollHandler = () => {
    console.log(inputRef.current.getBoundingClientRect());
  };

  if ((itemIn.id > 105 && itemIn.id < 112) || itemIn.id === 90)
    return (
      <th
        key={itemIn.id}
        style={{ backgroundColor: BoardColor.Left }}
        ref={inputRef}
      >
        {itemIn.id}
      </th>
    );
  if ((itemIn.id > 112 && itemIn.id < 119) || itemIn.id === 134)
    return (
      <th
        key={itemIn.id}
        style={{ backgroundColor: BoardColor.Right }}
        ref={inputRef}
      >
        {itemIn.id}
      </th>
    );
  if (UpperColor.includes(itemIn.id))
    return (
      <th
        key={itemIn.id}
        style={{ backgroundColor: BoardColor.Up }}
        ref={inputRef}
      >
        {itemIn.id}
      </th>
    );
  if (DownColor.includes(itemIn.id))
    return (
      <th
        key={itemIn.id}
        style={{ backgroundColor: BoardColor.Down }}
        ref={inputRef}
      >
        {itemIn.id}
      </th>
    );

  return (
    <th key={itemIn.id} ref={inputRef}>
      {itemIn.id}
    </th>
  );
};
