import { useEffect } from "react";

export const Modal = ({ name, onClose, children }) => {
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
    <div className={`modal modal_type_${name}`}>
      {/* the container for the contents */}
      <div className="modal__container">
        {/* here will be anything you add as `children`*/}
        {children}
        {/* add close button */}
        <button className="modal__close" type="button" onClick={onClose} />
      </div>
    </div>
  );
};
