import { MdClose } from "react-icons/md";

const Modal = ({ modal, closeModal, overlay, children }) => {
  const handleClickModal = (e) => {
    if (e.target.nodeName === "DIV" && e.target.classList.contains("overlay")) {
      closeModal();
    }
  };
  const handleClickCloseButton = () => {
    closeModal();
  };
  return (
    <div
      onClick={handleClickModal}
      ref={overlay}
      className="overlay overlay--modal"
    >
      <article ref={modal} className="modal">
        <button
          onClick={handleClickCloseButton}
          className="button button--modal-exit"
        >
          <MdClose size={30} />
        </button>
        {children}
      </article>
    </div>
  );
};

export default Modal;
