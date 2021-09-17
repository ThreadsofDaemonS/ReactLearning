import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let inititalState = {
  posts: [
    { id: 1, message: "Hey, how are you?", likesCount: 12 },
    { id: 2, message: "It's, my first post", likesCount: 15 },
  ],
  newPostText: "it-kamasutra.com",
  profile: null,
  status: "",
};

const profileReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: action.newPostBody,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    default:
      return state;
  }
};

export const addPostActionCreater = (newPostBody) => {
  return {
    type: ADD_POST,
    newPostBody,
  };
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) dispatch(setStatus(status));
  };
};

export default profileReducer;
