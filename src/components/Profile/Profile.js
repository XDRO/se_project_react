import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";
const Profile = ({
  onClick,
  clothingItems,
  onSelectCard,
  onCardLike,
  isLoggedIn,
  handleOpenModal,
  setCurrentUser,
  loggedIn,
}) => {
  return (
    <div className="profile">
      <SideBar
        onClick={() => onClick("edit")}
        isLoggedIn={isLoggedIn}
        handleOpenModal={handleOpenModal}
        setCurrentUser={setCurrentUser}
      />
      <div className="profile__items-container">
        <div className="profile__items-text">
          Your Items
          <button
            className="profile__add-button"
            onClick={() => onClick("create")}
            type="button"
          >
            + Add new
          </button>
        </div>
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          onCardLike={onCardLike}
          loggedIn={loggedIn}
        />
      </div>
    </div>
  );
};

export default Profile;
