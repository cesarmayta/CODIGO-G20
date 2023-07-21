import useModal from "../../hooks/useModal";
import MenuEdit from "../shared/MenuEdit";
import Modal from "../shared/Modal";
import AdminDescriptionForm from "./AdminDescriptionForm";

const AdminCategoryCard = ({ category, setCategories }) => {
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
        <div className="card-container card-container--edit card-container--only-description">
          <MenuEdit
            handleDelete={handleClickDelete}
            handleUpdate={handleClickUpdate}
          />
          <div
            className="card__main card__main--only-description"
            style={{
              "--type": '"Category:"',
            }}
          >
            <h3 className="card__title">{category.categoria_descripcion}</h3>
          </div>
        </div>
      </article>
      <Modal closeModal={closeModal} modal={modal} overlay={overlay}>
        <header className="modal__header">
          <h2 className="modal__title">Update Category</h2>
        </header>
        <div className="modal__main">
          <AdminDescriptionForm
            method="PUT"
            defaultValue={category.categoria_descripcion}
            textButton="Update"
            cb={(data) =>
              setCategories((prevCategories) =>
                prevCategories.map((prevCategory) =>
                  prevCategory.categoria_id === data.categoria_id
                    ? data
                    : prevCategory
                )
              )
            }
            url={`http://127.0.0.1:5000/categoria/${category.categoria_id}`}
          />
        </div>
      </Modal>
      <Modal
        closeModal={closeModalDelete}
        modal={modalDelete}
        overlay={overlayDelete}
      >
        <header className="modal__header">
          <h2 className="modal__title">Delete Category</h2>
        </header>
        <div className="modal__main">
          <AdminDescriptionForm
            method="DELETE"
            textButton="Confirm Delete"
            cb={(data) =>
              setCategories((prevCategories) =>
                prevCategories.filter(
                  (prevCategory) =>
                    prevCategory.categoria_id !== data.categoria_id
                )
              )
            }
            url={`http://127.0.0.1:5000/categoria/${category.categoria_id}`}
          />
        </div>
      </Modal>
    </>
  );
};

export default AdminCategoryCard;
