import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import useCourses from "../../hooks/useCourses";
import Spinner from "../shared/Spinner";
import SvgEmpty from "../Svgr/SvgEmpty";
import CourseCard from "./CourseCard";

const CoursesList = ({ category, filters, isValid }) => {
  const { loading, courses, getCourses } = useCourses(
    `http://127.0.0.1:5000/course`
  );
  const [coursesFiltered, setCoursesFiltered] = useState([]);

  const loadFilters = () => {
    setCoursesFiltered(
      courses.filter((course) => {
        return Object.entries(filters).every(([filter, value]) => {
          const valueCourse = Reflect.get(course, filter);
          return isValid
            ? isValid(valueCourse, value, filter, course)
            : (typeof valueCourse === "string"
                ? valueCourse
                : String(valueCourse)
              ).toLowerCase() === value?.toLowerCase();
        });
      })
    );
  };
  useEffect(() => {
    getCourses();
  }, [category]);
  useEffect(() => {
    loadFilters();
  }, [filters, courses]);

  return (
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
      ) : !coursesFiltered.length ? (
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="svg-container"
        >
          <SvgEmpty className="svg svg--empty" />
          <h2 className="svg__title">
            We do not have courses with those requirements, try changing filter
            values to find more courses.
          </h2>
        </motion.article>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="cards"
        >
          {coursesFiltered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoursesList;
