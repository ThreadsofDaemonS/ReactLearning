import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/564x/a3/b1/74/a3b174ae748c6c71a528e476b561df00.jpg" />
      {props.message}
      <div>
        <span>like </span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
