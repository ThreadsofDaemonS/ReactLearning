import React from "react";
import Preloader from "../../../common/Preloader/preloader";
import s from "./ProfileInfo.module.css";
import profilephoto from "../../../assets/images/user.png";
import ProfileStatus from "../ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
        <img
          className={s.img_content}
          src="https://bipbap.ru/wp-content/uploads/2017/08/16.jpg"
        />
      </div> */}
      <div className={s.descriptionBlock}>
        <img
          className={s.photo}
          src={
            !props.profile.photos.large
              ? profilephoto
              : props.profile.photos.large
          }
        />
        <div>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
