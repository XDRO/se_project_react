import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../../utils/auth";
import "./LoginModal.css";

const Login = ({
  isLoggedIn,
  handleCloseModal,
  onClick,
  setIsLoading,
  isLoading,
}) => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const token = await auth.authorize(values.email, values.password);
      if (!values.email || !values.password) {
        return;
      }
      console.log("Login successful. Token: ", token);
      isLoggedIn(true);
      history.push("/profile");
    } catch (error) {
      console.error("Login failed: ", error);
      history.push("/register");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <ModalWithForm
      title="Log in"
      onClose={handleCloseModal}
      name={`login`}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Logging in..." : "Log in"}
    >
      <div className="login">
        <div className="login__form">
          <label htmlFor="email">{"Email "}</label>
          <input
            className="login__form-input"
            name="email"
            id="email"
            required
            onChange={handleChange}
            value={values.email}
          />
          <label htmlFor="password">{"Password "}</label>
          <input
            className="login__form-input"
            name="password"
            id="password"
            required
            onChange={handleChange}
            value={values.password}
          />
          <div className="login__button-container"></div>
        </div>
        <div className="login__signup">
          <Link
            to="/register"
            onClick={() => onClick("register")}
            className="signup__link"
          >
            or Register
          </Link>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default Login;
