import { Modal } from "../Modal/Modal";
import "./ModalWithForm.css";
const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  showForm = true,
  state = { disabled: true },
  ref,
  onSubmit,
  activeModal,
}) => {
  return (
    <Modal name={name} onClose={onClose} activeModal={activeModal}>
      <div className="modal__overlay" ref={ref}>
        <div className={`modal modal_type_${name}`}>
          <div className={`modal__content modal__content_${name}`}>
            <button
              className={`modal__close-button modal__close-button_${name}`}
              type="button"
              onClick={onClose}
            />
            <h3 className={`modal__title modal__title_${name}`}>{title}</h3>
            {showForm && (
              <form className="modal__add-form" onSubmit={onSubmit}>
                {children}
                <button
                  className={`modal__button modal__button_${name}`}
                  // disabled={state}
                  type="submit"
                >
                  {buttonText}
                </button>
              </form>
            )}

            {!showForm && children}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWithForm;

{
}
