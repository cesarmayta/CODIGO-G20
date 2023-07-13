import { useEffect } from "react";
import { motion } from "framer-motion";
import { BsPlusLg } from "react-icons/bs";
import useAuthors from "../../hooks/useAuthors";
import useModal from "../../hooks/useModal";
import Modal from "../shared/Modal";
import AdminAuthorCard from "./AdminAuthorCard";
import AdminAuthorForm from "./AdminAuthorForm";
import Spinner from "../shared/Spinner";

const AdminAuthor = () => {
  const { authors, getAuthors, setAuthors, loading } = useAuthors();
  const { openModal, modal, overlay, closeModal } = useModal();
  const handleClickOpenModal = () => {
    openModal();
  };

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <div className="section-container section-container--courses">
      <h2 className="section__title">Admin Author</h2>
      <div className="cards">
        {loading ? (
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="spinner-container"
          >
            <Spinner className="spinner" />
            <h2 className="spinner__title">Loading authors...</h2>
          </motion.article>
        ) : (
          <>
            {authors.map((author) => (
              <AdminAuthorCard
                setAuthors={setAuthors}
                key={author.autor_id}
                author={author}
              />
            ))}
            <article onClick={handleClickOpenModal} className="card card--add">
              <div className="card-container card-container--add">
                <div className="card__main card__main--add">
                  <BsPlusLg size={100} />
                  <h2 className="card__title card__title--add">Add author</h2>
                </div>
              </div>
            </article>
          </>
        )}

        <Modal closeModal={closeModal} modal={modal} overlay={overlay}>
          <header className="modal__header">
            <h2 className="modal__title">Form Author</h2>
          </header>
          <div className="modal__main">
            <AdminAuthorForm
              cb={(data) => {
                setAuthors((prevAuthors) => [...prevAuthors, data]);
              }}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AdminAuthor;
