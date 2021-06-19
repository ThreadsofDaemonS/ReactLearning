import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://bipbap.ru/wp-content/uploads/2017/08/16.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
