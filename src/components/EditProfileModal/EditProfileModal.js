import React, { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ onEdit, setIsLoading, isLoading }) => {
  const { currentUser } = React.useContext(CurrentUserContext);

  const [values, setValues] = useState({
    name: currentUser.name,
    avatar: currentUser.avatar,
  });

  const handleChange = async (e) => {
    try {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      console.log(values);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await onEdit(values);
    } catch (error) {
      console.log("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Saving..." : "Save Changes"}
      name={`profile`}
    >
      <div className="profile__modal-form">
        <label htmlFor="name">{"Name "}</label>
        <input
          id="name"
          required
          className="profile__modal-input"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <label htmlFor="avatar">{"Avatar URL "}</label>
        <input
          id="avatar"
          required
          className="profile__modal-input"
          name="avatar"
          type="URL"
          value={values.avatar}
          onChange={handleChange}
        />
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
