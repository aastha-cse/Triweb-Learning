import React from "react";
import Styles from "./Square.module.css";

const Square = (props) => {
  return (
    <div onClick={props.onClick} className={`${Styles.squares} ${props.value==="X" ? Styles['turnX'] : Styles['turnO']}`}>
      <h5>{props.value}</h5>
    </div>
  );
};
export default Square;
