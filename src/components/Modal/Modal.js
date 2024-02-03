import { useEffect } from "react";

export const Modal = ({ name, onClose, children, ref }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    const handleOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOverlay);
    return () => document.addEventListener("mousedown", handleOverlay);
  }, []);

  return (
    <div className="modal__overlay">
      <div className={`modal modal_type_${name}`}>
        <div className={`modal__content modal__content_${name}`}>
          <button
            className={`modal__close-button modal__close-button_${name}`}
            type="button"
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </div>
  );
};
