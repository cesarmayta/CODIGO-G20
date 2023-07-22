import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link, useOutletContext } from "react-router-dom";
import CourseTopic from "./CourseTopic";

const CourseOverview = () => {
  const course = useOutletContext();

  return (
    <div className="section-container section-container--course">
      <h2 className="section__title section__title--course">
        Course Curriculum
      </h2>
      <ul className="menu menu--topics">
        {course?.topics?.map((topic) => (
          <CourseTopic key={topic.id} topic={topic}>
            {topic?.classes.map((classTopic) => (
              <li key={classTopic.id} className="menu__item menu__item--class">
                <Link
                  className="menu__item__link menu__item__link--class"
                  to="#"
                >
                  <BsFillPlayCircleFill size={20} />
                  <h6 className="menu__item__link__title">
                    {classTopic.title}
                  </h6>
                  <span className="menu__item__link__duration">
                    {classTopic.duration} min
                  </span>
                </Link>
              </li>
            ))}
          </CourseTopic>
        ))}
      </ul>
    </div>
  );
};

export default CourseOverview;
