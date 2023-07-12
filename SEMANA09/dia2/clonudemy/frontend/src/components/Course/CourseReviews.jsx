import { useOutletContext } from "react-router-dom";
import getStars from "../../utils/getStars";
import Stars from "../shared/Stars";

const CourseReviews = () => {
  const course = useOutletContext();
  const stars = getStars(course);
  return (
    <div className="section-container section-container--info section-container--course">
      <article className="rating">
        <div className="rating__main">
          <h2 className="rating__score">{course.stars}</h2>
          <Stars stars={stars} color="#666" />
          <h3 className="rating__subtitle">Course Rating</h3>
        </div>
      </article>
    </div>
  );
};

export default CourseReviews;
