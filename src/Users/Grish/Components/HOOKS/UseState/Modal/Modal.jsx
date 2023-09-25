import "./Modal.css";

export default function Modal({ delById, onClose }) {
  return (
    <div className="Modal">
      <div className="Modal__item">
        <h1 className="Modal__quation">Are you sure?</h1>
        <div className="Modal__button">
            <button className="btn Modal__delete"
              onClick={() => {delById(); onClose() }}>
              Delete
            </button>
            <button className="btn Modal__cancel" onClick={onClose}>Cancel</button>
        </div>
        </div>

    </div>
  );
}
