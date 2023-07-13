import { BsFillStopwatchFill } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdClass, MdPhotoSizeSelectActual, MdPriceCheck } from "react-icons/md";
import { Link } from "react-router-dom";
import useModal from "../../hooks/useModal";
import getStars from "../../utils/getStars";
import AdminCourseForm from "../Admin/AdminCourseForm";
import Modal from "../shared/Modal";
import Stars from "../shared/Stars";

const CourseCard = ({ course, withModal, Container = Link, setCourses }) => {
  const stars = getStars(course);
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
      <article className="card">
        <Container
          handleUpdate={handleClickUpdate}
          handleDelete={handleClickDelete}
          course={course}
          className="card-container"
          to={`/course/${course._id}`}
        >
          <header className="card__header">
            <img
              className="card__img"
              width={340}
              height={178}
              src={course.img}
              alt={`Course ${course.title}`}
            />
          </header>
          <div className="card__main">
            <h3 className="card__title">{course.title}</h3>
            <p className="card__paragraph">{course.description}</p>
            <h4 className="card__subtitle">{course.teacher}</h4>

            <ul className="menu menu--features">
              <li className="menu__item">
                <span className="menu__item__feature">
                  {course.duration} total hours
                </span>
              </li>
              <li className="menu__item">
                <span className="menu__item__feature menu__item__feature--dot">
                  ·
                </span>
              </li>
              <li className="menu__item">
                <span className="menu__item__feature">
                  {course.lectures} lectures
                </span>
              </li>
            </ul>
          </div>
          <footer className="card__footer">
            <h6 className="card__level">
              <GiSettingsKnobs size={15} color="#718096" /> {course.level} level
            </h6>
            <Stars className="card-stars" stars={stars} aria-label="Stars" />
            <h3 className="card__price">
              {course.price === "free" ? "Free" : `$${course.price}`}
            </h3>
          </footer>
        </Container>
      </article>
      {withModal && (
        <>
          <Modal closeModal={closeModal} modal={modal} overlay={overlay}>
            <header className="modal__header">
              <h2 className="modal__title">Update Course</h2>
            </header>
            <div className="modal__main">
              <AdminCourseForm
                cb={(data) =>
                  setCourses((prevCourses) =>
                    prevCourses.map((prevCourse) =>
                      prevCourse._id === data._id ? data : prevCourse
                    )
                  )
                }
                url={`http://127.0.0.1:5000/course/${course._id}`}
                method="PUT"
                labelsExtra={[
                  {
                    title: "Photo",
                    Icon: MdPhotoSizeSelectActual,
                    type: "text",
                    name: "photo",
                    id: "photo",
                    placeholder: "Url of Image",
                    defaultValue: course.img,
                  },
                  {
                    className: "form__label--option",
                    title: "Duration",
                    Icon: BsFillStopwatchFill,
                    type: "number",
                    name: "duration",
                    id: "duration",
                    placeholder: "New duration",
                    defaultValue: course.duration,
                  },
                  {
                    className: "form__label--option",
                    title: "Classes",
                    Icon: MdClass,
                    type: "number",
                    name: "classes",
                    id: "classes",
                    defaultValue: 0,
                    placeholder: "New classes",
                    defaultValue: course.lectures,
                  },
                  {
                    className: "form__label--option",
                    title: "Price",
                    Icon: MdPriceCheck,
                    type: "number",
                    name: "price",
                    id: "price",
                    defaultValue: course.price,
                    placeholder: "New price",
                  },
                ]}
                buttonText="Update"
                course={course}
              />
            </div>
          </Modal>
          <Modal
            closeModal={closeModalDelete}
            modal={modalDelete}
            overlay={overlayDelete}
          >
            <header className="modal__header">
              <h2 className="modal__title">Delete Course</h2>
            </header>
            <div className="modal__main">
              <AdminCourseForm
                method="DELETE"
                buttonText="Confirm Delete"
                cb={(data) =>
                  setCourses((prevCourses) =>
                    prevCourses.filter(
                      (prevCourse) => prevCourse._id !== data._id
                    )
                  )
                }
                url={`http://127.0.0.1:5000/course/${course._id}`}
                course={course}
              />
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default CourseCard;
