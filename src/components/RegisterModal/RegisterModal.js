import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./RegisterModal.css";
import * as auth from "../../utils/auth";
// here I want to export it in the same line it was made
// if i can't seem to do that export it normally

// pass in arguments for events in register = ()
const Register = ({
  isLoggedIn,
  handleCloseModal,
  onClick,
  setCurrentUser,
  setIsLoading,
  isLoading,
}) => {
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  // confirmPassword: "",

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  // Register.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Values before registration:", values);
    try {
      setIsLoading(true);
      const userData = await auth.register(values);
      console.log("UserData received after registration:", userData);

      setCurrentUser(userData);
      isLoggedIn(true);
      const email = values.email;
      history.push(`/profile/${email}`);
    } catch (err) {
      console.error("Error during registration: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Registering..." : "Next"}
    >
      <div className="register">
        <div className="register__form">
          <label htmlFor="name">{"Name "}</label>
          <input
            required
            className="register__form-input"
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
          <label htmlFor="email">{"Email "}</label>
          <input
            required
            className="register__form-input"
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          <label htmlFor="password">{"Password "}</label>
          <input
            required
            className="register__form-input"
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          <label htmlFor="avatar">{"Avatar URL "}</label>
          <input
            required
            className="register__form-input"
            id="avatar"
            name="avatar"
            type="URL"
            value={values.avatar}
            onChange={handleChange}
          />
        </div>
        <div className="register__signin">
          <Link
            to="login"
            onClick={() => onClick("login")}
            className="register__login-link"
          >
            or Log in
          </Link>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default Register;

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (password === confirmPassword) {
//     auth
//       .register(name, email, password)
//       .then((res) => console.log(res))
//       .catch(console.log);
//   }
// if (values.password === values.confirmPassword) {
//   onRegister(values);
// }
// };

// removed for use later
{
  /* <label>
            {"Confirm Password: "}
            <input
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
          </label> */
}
