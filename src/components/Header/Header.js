import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import AvatarLogo from "../../images/headerAvatar.svg";
import avatarImage from "../../images/headerLogo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import "../UserPlaceHolder/UserPlaceHolder.css";
// import the context
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";
import UserPlaceHolder from "../UserPlaceHolder/UserPlaceHolder";

const Header = ({ isLoggedIn, onCreate, city, currentDate }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  console.log(currentUser);

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={avatarImage} alt="Logo" />
          </Link>
        </div>
        <div className="header__date-and-location">
          <div className="header__date">{currentDate},</div>
          <div className="header__location">{city}</div>
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__button-add-clothes"
            onClick={onCreate}
            type="button"
          >
            + Add Clothes
          </button>
        </div>
        {isLoggedIn ? (
          <p to="/profile" className="header__user-name">
            {currentUser.name}
          </p>
        ) : (
          <Link to="/register" className="header__sign">
            Sign Up
          </Link>
        )}

        <div>
          {isLoggedIn ? (
            <img
              src={currentUser.avatar}
              className="header__avatar"
              alt="Avatar"
            />
          ) : currentUser.avatar ? (
            <UserPlaceHolder />
          ) : (
            <Link to="/login" className="header__sign">
              Log in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// {isLoggedIn ? (
//   <img
//     src={user.data.avatar}
//     className="header__avatar"
//     alt="Avatar"
//   />
// ) : (
//   <Link to="/login" className="header__sign">
//     Log in
//   </Link>
// )}

{
  /* {isLoggedIn ? (
          <p to="/profile" className="header__user-name">
            {currentUser.name}
          </p>
        ) : (
          <Link to="/register" className="header__sign">
            Sign Up
          </Link>
        )} */
}
