import React, { useState } from "react";
import Preloader from "../../../common/Preloader/preloader";
import s from "./ProfileInfo.module.css";
import profilephoto from "../../../assets/images/user.png";
import ProfileStatus from "../ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

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
        {props.isOwner && (
          <input type={"file"} onChange={onMainPhotoSelected} />
        )}
        {editMode ? (
          <ProfileDataFormReduxForm
            initialValues={props.profile}
            profile={props.profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}

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

const ProfileData = (props) => {
  return (
    <div>
      <div>
        {props.isOwner && <button onClick={props.goToEditMode}>edit</button>}
        <div>
          <b>Full name</b> :{props.profile.fullName}
        </div>
        <div>
          <b>Looking for a job</b> :
          {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        {props.profile.lookingForAJob && (
          <div>
            <b>My professional skils</b> :
            {props.profile.lookingForAJobDescription}
          </div>
        )}
        <div>
          <b>About me :</b>
          {props.profile.aboutMe}
        </div>
      </div>
      <div>
        <b>Contacts</b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
