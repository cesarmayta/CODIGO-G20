import { redirect, useLocation, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import CoursesHero from "../../components/Course/CourseHero";
import { useEffect, useState } from "react";
import Spinner from "../../components/shared/Spinner";
import MemberPlayList from "./MemberPlayList";

export const loaderCourse = ({ request, params }) => {
  const url = new URL(request.url);
  const id = url.pathname.split("/").at(-1);
  console.log('id : ',id)
  url.pathname += "/overview";
  if (id === params.id) return redirect(url);
  return null;
};

const MemberCourse = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const getCourse = async () => {
    const response = await fetch(`http://localhost:5000/video/course/${id}`);
    const data = await response.json();
    setVideos(data);
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

          <div>
            <MemberPlayList videos={videos} />
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default MemberCourse;
