import { redirect, useLocation, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import CourseNav from "../components/Course/CourseNav";
import CoursesHero from "../components/Course/CourseHero";
import { useEffect, useState } from "react";
import Spinner from "../components/shared/Spinner";
import AnimatedOutlet from "../components/shared/AnimatedOutlet";

export const loaderCourse = ({ request, params }) => {
  const url = new URL(request.url);
  const id = url.pathname.split("/").at(-1);
  console.log('id : ',id)
  url.pathname += "/overview";
  if (id === params.id) return redirect(url);
  return null;
};

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const getCourse = async () => {
    const response = await fetch(`http://localhost:5000/course/${id}`);
    const data = await response.json();
    setCourse(data);
    setLoading(false);
  };
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <AnimatePresence>
      {loading ? (
        <motion.article
          key="loading"
          initial={{
            translateY: 0,
          }}
          animate={{
            translateY: 0,
          }}
          exit={{
            translateY: "100%",
          }}
          transition={{
            duration: 0.25,
          }}
          className="spinner-container spinner-container--course"
        >
          <Spinner className="spinner" />
          <h2 className="spinner__title">Loading course content</h2>
        </motion.article>
      ) : (
        <motion.main
          key="content"
          initial={{
            translateY: "100%",
          }}
          animate={{
            translateY: 0,
          }}
          exit={{
            translateY: "100%",
          }}
          transition={{
            duration: 0.25,
          }}
          className="main main--course"
        >
          <CoursesHero course={course} />
          <CourseNav />
          <AnimatePresence mode="popLayout">
            <motion.section
              className="section"
              key={location.key}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
            >
              <AnimatedOutlet value={course} />
            </motion.section>
          </AnimatePresence>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default Course;
