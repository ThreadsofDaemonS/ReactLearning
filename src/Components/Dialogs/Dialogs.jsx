import React from "react";
import { NavLink } from "react-router-dom";
import DialogsItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreater,
} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  // let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreater());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {" "}
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={onMessageChange}
              //ref={newMessageElement}
              value={props.newMessageText}
            ></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
