import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
const DeleteItemModal = ({ onClose, deleteCard }) => {
  return (
    <ModalWithForm
      title="Are you sure you want to delete this item?"
      onClose={onClose}
      name={`delete`}
      showForm={false}
    >
      <h3 className="delete_modal-text"> This action is irreversible.</h3>
      <button className="delete_btn delete_btn-confirm" onClick={deleteCard}>
        Yes, delete item
      </button>
      <button className="delete_btn delete_btn-cancel" onClick={onClose}>
        Cancel
      </button>
    </ModalWithForm>
  );
};

export default DeleteItemModal;

{
  /* <div className="modal__overlay">
       <div className={`modal delete`}>
        <div className="delete__modal">
          <div className="delete__modal-header">
            <button className="delete__modal-close">
              <img src={closeButton} onClick={onClose} alt="Close Button"></img>
            </button>
          </div>

          <div className="delete__modal-content">
            <p className="delete__modal-text">
              Are you sure you want to delete this item?
            </p>
            <p className="delete__modal-text">This action is irreversible.</p>
          </div>
          <div className="delete__modal-footer">
            <button
              className="delete_btn delete_btn-confirm"
              onClick={deleteCard}
            >
              Yes, delete item
            </button>
            <button className="delete_btn delete_btn-cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div> 
</div> */
}

{
}
