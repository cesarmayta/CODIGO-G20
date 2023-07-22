import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsPlusLg } from "react-icons/bs";
import useLevels from "../../hooks/useLevels";
import useModal from "../../hooks/useModal";
import Modal from "../shared/Modal";
import AdminLevelCard from "./AdminLevelCard";
import AdminDescriptionForm from "./AdminDescriptionForm";
import Spinner from "../shared/Spinner";

const AdminLevels = () => {
  const { levels, getLevels, setLevels, loading } = useLevels();
  const { openModal, modal, overlay, closeModal } = useModal();
  const handleClickOpenModal = () => {
    openModal();
  };

  useEffect(() => {
    getLevels();
  }, []);

  return (
    <div className="section-container section-container--courses">
      <h2 className="section__title">Admin Levels</h2>
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
              <h2 className="spinner__title">Loading levels...</h2>
            </motion.article>
          ) : (
            <>
              {levels.map((level) => (
                <AdminLevelCard
                  setLevels={setLevels}
                  key={level.nivel_id}
                  level={level}
                />
              ))}
              <article
                onClick={handleClickOpenModal}
                className="card card--add"
              >
                <div className="card-container card-container--add">
                  <div className="card__main card__main--add">
                    <BsPlusLg size={100} />
                    <h2 className="card__title card__title--add">Add level</h2>
                  </div>
                </div>
              </article>
            </>
          )}
        </AnimatePresence>
        <Modal closeModal={closeModal} modal={modal} overlay={overlay}>
          <header className="modal__header">
            <h2 className="modal__title">Form Level</h2>
          </header>
          <div className="modal__main">
            <AdminDescriptionForm
              textButton="Create level"
              cb={(data) => {
                setLevels((prevLevels) => [...prevLevels, data]);
              }}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AdminLevels;
