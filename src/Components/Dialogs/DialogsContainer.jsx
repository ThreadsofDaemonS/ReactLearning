import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreater } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
      dispatch(addMessageActionCreater(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
