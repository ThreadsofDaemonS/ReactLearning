import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <img src="https://i.pinimg.com/564x/a3/b1/74/a3b174ae748c6c71a528e476b561df00.jpg" />
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
