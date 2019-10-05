import "./login.scss";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import CloseIcon from "../Icons/CloseIcon";
import { setModal, submitLogin } from "../../../_actions";
import { InputField } from "../Forms/Fields";
import useFormUtil from "../../../_utils/useFormUtil";

const Login = props => {
  const loginUser = validFields => {
    if (validFields) props.submitLogin(validFields);
  };

  const { fields, onChange, onSubmit } = useFormUtil(loginUser, {
    username: {
      value: "",
      errors: [],
      validators: [/^(?=.*[a-zA-Z0-9])(?=.{5,})/]
    },
    password: {
      value: "",
      errors: [],
      validators: [
        /^(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
      ]
    }
  });

  useEffect(() => {
    if (!props.error && props.token) props.setModal();
  }, [props]);

  return (
    <div id="login-modal">
      <div id="login-modal__close" onClick={() => props.setModal()}>
        <CloseIcon />
      </div>
      <p id="login-modal__title">LOGIN</p>
      {props.error && <p className="error">{props.error}</p>}
      <form onSubmit={onSubmit}>
        <InputField
          type="text"
          placeholder="Enter Username"
          name="username"
          value={fields.username.value}
          inValid={fields.username.errors.length}
          onChange={onChange}
        />
        <InputField
          type="password"
          placeholder="Enter Password"
          name="password"
          value={fields.password.value}
          inValid={fields.password.errors.length}
          onChange={onChange}
        />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error
});

export default connect(
  mapStateToProps,
  {
    setModal,
    submitLogin
  }
)(Login);
