import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
const DeleteItemModal = ({ onClose, deleteCard, setIsLoading, isLoading }) => {
  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteCard(deleteCard);
    } catch (error) {
      console.log(error);
    } finally {
      onClose(onClose);
      setIsLoading(false);
    }
  };
  return (
    <ModalWithForm
      title="Are you sure you want to delete this item?"
      onClose={onClose}
      name={`delete`}
      showForm={false}
    >
      <h3 className="delete_modal-text"> This action is irreversible.</h3>
      <button className="delete_btn delete_btn-confirm" onClick={handleDelete}>
        {isLoading ? "Deleting..." : "Yes, delete item"}
      </button>
      <button className="delete_btn delete_btn-cancel" onClick={onClose}>
        Cancel
      </button>
    </ModalWithForm>
  );
};

export default DeleteItemModal;
