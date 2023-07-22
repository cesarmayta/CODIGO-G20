import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsPlusLg } from "react-icons/bs";
import useCourses from "../../hooks/useCourses";
import CourseCard from "../../components/Courses/CourseCard";
import Spinner from "../shared/Spinner";
import Container from "../shared/Container";

const MemberCourses = () => {
  const { courses, getCourses, setCourses, loading } = useCourses();

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="section-container section-container--courses">
      <h2 className="section__title">Cursos Activos</h2>
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
                <CourseCard key={course.id} course={course} isMember={true} />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MemberCourses;
