import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
const ItemModal = ({ currentUser, selectedCard, onClose, onClick }) => {
  const isOwn = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = `modal__button_delete ${
    isOwn ? "modal__button-delete_visible" : "modal__button-delete_hidden"
  }`;
  return (
    <ModalWithForm name={`item`} showForm={false}>
      <div className="modal__card-image_container">
        <div className={`modal__title_item`}>
          Weather Type: {selectedCard.weather}
        </div>
        <div className="modal__selected-card_name">{selectedCard.name}</div>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        ></img>
        <div
          className={itemDeleteButtonClassName}
          onClick={() => onClick("delete")}
        >
          Delete Item
        </div>
      </div>
    </ModalWithForm>
  );
};

export default ItemModal;

// "modal__content modal__content-item"

{
  /* <div className="modal__overlay">
<div className={`modal`}>
  <div className={`item`}>
    <button
      className="modal__close-button modal__close-button_image"
      type="button"
      onClick={onClose}
    ></button>
    <img
      className="modal__image"
      src={selectedCard.imageUrl}
      alt={selectedCard.name}
    ></img>

    <div className="modal__description">
      <div>{selectedCard.name}</div>
      <div>weather type: {selectedCard.weather}</div>
    </div>

    <div className="modal__delete-button_container">
      <button
        className={itemDeleteButtonClassName}
        onClick={() => onClick("delete")}
      >
        Delete Item
      </button>
    </div>
  </div>
</div>
</div> */
}

{
  /* <ModalWithForm
      name={`item`}
      // title={}
      showForm={false}
    >
      <div className="modal__card-image_container">
        <div className={`modal__title_item`}>
          Weather Type: {selectedCard.weather}
        </div>
        <div className="modal__selected-card_name">{selectedCard.name}</div>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        ></img>
        <div
          className={itemDeleteButtonClassName}
          onClick={() => onClick("delete")}
        >
          Delete Item
        </div>
      </div>
    </ModalWithForm> */
}
