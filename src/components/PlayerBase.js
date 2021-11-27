import classes from './PlayerBase.module.css';
//Refactor for cleaner code
const PlayerBase = (props) => {
  return (
    <div className={classes.fullBoard}>
      <div
        className={`${classes.base}`}
        style={{ backgroundColor: props.color.Left }}
      ></div>
      <div
        className={`${classes.base} ${classes.upRight}`}
        style={{ backgroundColor: props.color.Up }}
      ></div>
      <div
        className={`${classes.base} ${classes.downLeft}`}
        style={{ backgroundColor: props.color.Down }}
      ></div>
      <div
        className={`${classes.base} ${classes.downRight}`}
        style={{ backgroundColor: props.color.Right }}
      ></div>
    </div>
  );
};
export default PlayerBase;
