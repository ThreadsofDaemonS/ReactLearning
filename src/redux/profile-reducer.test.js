import profileReducer, {
  addPostActionCreater,
  deletePost,
} from "./profile-reducer";
import { render, screen } from "@testing-library/react";

let state = {
  posts: [
    { id: 1, message: "Hey, how are you?", likesCount: 12 },
    { id: 2, message: "It's, my first post", likesCount: 15 },
  ],
};

test("length of posts should be incremented", () => {
  let action = addPostActionCreater("it-kamasutra.com");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

test("message of new post should be correct", () => {
  let action = addPostActionCreater("it-kamasutra.com");

  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

test("after deleting message length should be decremented", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});
