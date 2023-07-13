import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsPlusLg } from "react-icons/bs";
import useCategories from "../../hooks/useCategories";
import useModal from "../../hooks/useModal";
import Modal from "../shared/Modal";
import AdminCategoryCard from "./AdminCategoryCard";
import AdminDescriptionForm from "./AdminDescriptionForm";
import Spinner from "../shared/Spinner";

const AdminCategories = () => {
  const { categories, getCategories, setCategories, loading } = useCategories();
  const { openModal, modal, overlay, closeModal } = useModal();
  const handleClickOpenModal = () => {
    openModal();
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="section-container section-container--courses">
      <h2 className="section__title">Admin Categories</h2>
      <div className="cards">
        <AnimatePresence>
          {loading ? (
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="spinner-container"
            >
              <Spinner className="spinner" />
              <h2 className="spinner__title">Loading categories...</h2>
            </motion.article>
          ) : (
            <>
              {categories.map((category) => (
                <AdminCategoryCard
                  setCategories={setCategories}
                  key={category.categoria_id}
                  category={category}
                />
              ))}
              <article
                onClick={handleClickOpenModal}
                className="card card--add"
              >
                <div className="card-container card-container--add">
                  <div className="card__main card__main--add">
                    <BsPlusLg size={100} />
                    <h2 className="card__title card__title--add">
                      Add category
                    </h2>
                  </div>
                </div>
              </article>
            </>
          )}
        </AnimatePresence>
        <Modal closeModal={closeModal} modal={modal} overlay={overlay}>
          <header className="modal__header">
            <h2 className="modal__title">Form Category</h2>
          </header>
          <div className="modal__main">
            <AdminDescriptionForm
              textButton="Create Category"
              url="http://127.0.0.1:5000/categoria"
              type="category"
              cb={(data) =>
                setCategories((prevCategories) => [...prevCategories, data])
              }
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AdminCategories;
