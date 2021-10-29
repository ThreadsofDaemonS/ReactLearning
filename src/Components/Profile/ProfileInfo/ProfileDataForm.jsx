import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";
import styles from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, error, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {<button>Save</button>}

        {error && <div className={styles.formSummaryError}>{error}</div>}

        <div>
          <b>Full name</b> : {createField("Full name", "fullname", [], Input)}
        </div>
        <div>
          <b>Looking for a job</b> :{" "}
          {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div>
          <b>My professional skills</b> :
          {createField("Skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
          <b>About me :</b>
          {createField("About me", "aboutMe", [], Input)}
        </div>
      </div>

      <div>
        <b>Contacts</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
