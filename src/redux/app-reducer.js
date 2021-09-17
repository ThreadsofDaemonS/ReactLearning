import { authAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let inititalState = {
  initialized: false,
};

const appReducer = (state = inititalState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
