import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Input, createField } from "../../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { login, setAuthUserData } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import s from "../../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          type={"password"}
          validate={[required]}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
        remember me
      </div>
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField(`Symbols from image`, "captcha", [required], Input)}

      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

const Login = (props) => {
  let onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
