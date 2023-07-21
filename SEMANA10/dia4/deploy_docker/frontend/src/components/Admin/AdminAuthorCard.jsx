import useModal from "../../hooks/useModal";
import MenuEdit from "../shared/MenuEdit";
import Modal from "../shared/Modal";
import AdminAuthorForm from "./AdminAuthorForm";

const AdminAuthorCard = ({ author, setAuthors }) => {
  const { modal, overlay, openModal, closeModal } = useModal();
  const {
    modal: modalDelete,
    overlay: overlayDelete,
    openModal: openModalDelete,
    closeModal: closeModalDelete,
  } = useModal();

  const handleClickUpdate = () => {
    openModal();
  };
  const handleClickDelete = () => {
    openModalDelete();
  };

  return (
    <>
      <article className="card card--author">
        <div className="card-container card-container--edit">
          <MenuEdit
            handleDelete={handleClickDelete}
            handleUpdate={handleClickUpdate}
          />
          <header className="card__header">
            <img
              className="card__img"
              width={340}
              height={178}
              src={author.autor_foto}
              alt={`Photo ${author.autor_nombre}`}
            />
          </header>
          <div className="card__main card__main--author">
            <h3 className="card__title">{author.autor_nombre}</h3>
            <p className="card__paragraph">{author.autor_descripcion}</p>
          </div>
        </div>
      </article>
      <Modal closeModal={closeModal} modal={modal} overlay={overlay}>
        <header className="modal__header">
          <h2 className="modal__title">Update Author</h2>
        </header>
        <div className="modal__main">
          <AdminAuthorForm
            cb={(data) =>
              setAuthors((prevAuthors) =>
                prevAuthors.map((prevAuthor) =>
                  prevAuthor.autor_id === data.autor_id ? data : prevAuthor
                )
              )
            }
            url={`http://127.0.0.1:5000/autor/${author.autor_id}`}
            method="PUT"
            buttonText="Update"
            author={author}
          />
        </div>
      </Modal>
      <Modal
        closeModal={closeModalDelete}
        modal={modalDelete}
        overlay={overlayDelete}
      >
        <header className="modal__header">
          <h2 className="modal__title">Delete Author</h2>
        </header>
        <div className="modal__main">
          <AdminAuthorForm
            method="DELETE"
            buttonText="Confirm Delete"
            cb={(data) =>
              setAuthors((prevAuthors) =>
                prevAuthors.filter(
                  (prevAuthor) => prevAuthor.autor_id !== data.autor_id
                )
              )
            }
            url={`http://127.0.0.1:5000/autor/${author.autor_id}`}
          />
        </div>
      </Modal>
    </>
  );
};

export default AdminAuthorCard;
