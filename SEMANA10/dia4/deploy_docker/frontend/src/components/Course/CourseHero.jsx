import { BiBasket } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import getStars from "../../utils/getStars";
import Stars from "../shared/Stars";

const CourseHero = ({ course }) => {
  const category = course.category?.replace("-", " ");
  console.log(category)
  const stars = getStars(course);
  return (
    <article
      style={{
        backgroundColor: `#92a8d1`,
      }}
      className="hero"
    >
      <div className="hero-container">
        <img
          className="hero__img"
          src={course.img}
          alt={`Previus ${course.title} course`}
        />
        <h3 className="hero__subtitle">{category}</h3>
        <h2 className="hero__title">{course.title}</h2>
        <p className="hero__paragraph">{course.description}</p>
        <ul className="menu menu--features">
          <li className="menu__item hero__stars">
            <span className="hero__stars__score">{course.stars}</span>
            <Stars stars={stars} className="menu--stars-hero" />
          </li>
          <li className="menu__item menu__item--views">
            <BsFillPeopleFill size={20} />
            <span>{course.lectures} views</span>
          </li>
        </ul>
        <ul className="menu menu--features menu--course-hero">
          <li className="menu__item">
            <span className="menu__item__feature menu__item__feature--course-hero">
              Created by{" "}
              <span className="menu__item__feature menu__item__feature--course-hero-teacher">
                {course.teacher}
              </span>
            </span>
          </li>
          <li className="menu__item">
            <span className="menu__item__feature menu__item__feature--course-hero menu__item__feature--dot">
              ·
            </span>
          </li>
          <li className="menu__item">
            <span className="menu__item__feature menu__item__feature--course-hero">
              {course.price === "free"
                ? "This course is free"
                : `Cost: ${course.price}`}
            </span>
          </li>
          <li className="menu__item">
            <Link to="#" className="button button--start-course">
              Start Course
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CourseHero;
