import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal({ imgInfo, isOpen, onClose }) {
  if (!isOpen) return null;
  return createPortal(
    <div
      className="modal-area"
      onClick={(e) => {
        if (e.target.className === "modal-area") {
          onClose(false);
        }
      }}
    >
      <div className="modal">
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
