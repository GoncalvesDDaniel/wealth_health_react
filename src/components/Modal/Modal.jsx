import React from "react";
import "./modal.css";

/**Simple and reusable Modal component.
 * Displays content in a centered box with an overlay.
 * @param {object} props - The component's properties.
 * @param {boolean} props.isOpen - Determines if the modal is open or closed.
 * @param {function} props.onClose - Function to call to close the modal.
 * @param {React.ReactNode} props.children - The content to display in the modal.
 */
function Modal({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={handleContentClick}>
                <button className="modal-close-button" onClick={onClose}>
                    x
                </button>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
