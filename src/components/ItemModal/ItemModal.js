import { Modal } from "../Modal/Modal";
// import "../ModalWithForm/ModalWithForm.css";
import "../Modal/Modal.css";
const ItemModal = ({
  currentUser,
  selectedCard,
  onClose,
  onClick,
  loggedIn,
}) => {
  const isOwn = selectedCard.owner === currentUser._id;
  console.log(loggedIn);
  const itemDeleteButtonClassName = `modal__button_delete ${
    isOwn ? "modal__button-delete_visible" : "modal__button-delete_hidden"
  }`;
  return (
    <Modal name={`item`} onClose={onClose}>
      <div className="modal__card-image_container">
        <div className={`modal__title_item`}>
          Weather Type: {selectedCard.weather}
        </div>
        <div className="modal__elements-container">
          <div className="modal__selected-card_name">{selectedCard.name}</div>
          <img
            className="modal__image"
            src={selectedCard.imageUrl}
            alt={selectedCard.name}
          ></img>
        </div>

        {loggedIn ? (
          <div
            className={itemDeleteButtonClassName}
            onClick={() => onClick("delete")}
          >
            Delete Item
          </div>
        ) : (
          <></>
        )}
      </div>
    </Modal>
  );
};

export default ItemModal;
