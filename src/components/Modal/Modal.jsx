import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import "./Modal.css";

function Modal({ imgInfo, isOpen, onClose }) {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-area" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header flex justify-between items-center">
          <h1>{imgInfo.target.alt}</h1>
          <button className="close bg-gray-900 text-red-50" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <img src={imgInfo.target.src} alt={imgInfo.target.alt} />
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.propTypes = {
  imgInfo: PropTypes.object,
  onOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
