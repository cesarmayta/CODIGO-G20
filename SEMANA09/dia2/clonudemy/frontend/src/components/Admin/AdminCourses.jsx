import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsPlusLg } from "react-icons/bs";
import useCourses from "../../hooks/useCourses";
import useModal from "../../hooks/useModal";
import CourseCard from "../Courses/CourseCard";
import Modal from "../shared/Modal";
import Spinner from "../shared/Spinner";
import AdminCourseForm from "./AdminCourseForm";
import Container from "../shared/Container";

const AdminCourses = () => {
  const { courses, getCourses, setCourses, loading } = useCourses();
  const { openModal, modal, overlay, closeModal } = useModal();
  const handleClickOpenModal = () => {
    openModal();
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="section-container section-container--courses">
      <h2 className="section__title">Admin courses</h2>
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
              <h2 className="spinner__title">Loading courses...</h2>
            </motion.article>
          ) : (
            <>
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  withModal
                  setCourses={setCourses}
                  course={course}
                  Container={Container}
                />
              ))}
              <article
                onClick={handleClickOpenModal}
                className="card card--add"
              >
                <div className="card-container card-container--add">
                  <div className="card__main card__main--add">
                    <BsPlusLg size={100} />
                    <h2 className="card__title card__title--add">Add course</h2>
                  </div>
                </div>
              </article>
            </>
          )}
        </AnimatePresence>
        <Modal closeModal={closeModal} modal={modal} overlay={overlay}>
          <header className="modal__header">
            <h2 className="modal__title">Form Course</h2>
          </header>
          <div className="modal__main">
            <AdminCourseForm
              buttonText="Create course"
              cb={(data) => {
                setCourses((prevCourses) => [...prevCourses, data]);
              }}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AdminCourses;
