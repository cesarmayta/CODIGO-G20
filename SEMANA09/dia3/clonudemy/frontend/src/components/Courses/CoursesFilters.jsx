import { useLayoutEffect } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import useLevels from "../../hooks/useLevels";
import CoursesFilter from "./CoursesFilter";

const CoursesFilters = ({ category: categoryName, className }) => {
  const location = useLocation();
  const { categories, getCategories } = useCategories();
  const { levels, getLevels } = useLevels();
  const search = new URLSearchParams(location.search.replace("?", ""));

  useLayoutEffect(() => {
    getCategories();
    getLevels();
  }, []);
  return (
    <aside className={"aside".concat(className ? ` ${className}` : "")}>
      <div className="aside-container">
        <CoursesFilter
          title="Categories"
          name="category"
          type="select"
          className="button button--select"
          classNameList="menu menu--categories"
          optionClassName="menu__item menu__item--categories"
          options={categories
            .map((category) => ({
              child: category["categoria_descripcion"],
              value: category["categoria_descripcion"],
            }))
            ?.map((category) => {
              search.set("category", category.value);
              return {
                ...category,
                checked: categoryName === category.value,
                child: (
                  <Link
                    className="menu__item__link menu__item__link--categories"
                    to={`/courses/?${search.toString()}`}
                  >
                    {category.child}
                  </Link>
                ),
              };
            })}
        />
        <CoursesFilter
          title="Skill Levels"
          type="radio"
          name="level"
          options={levels.map((level) => ({
            child: level["nivel_descripcion"],
            value: level["nivel_descripcion"],
            checked:
              search.get("level") === level["nivel_descripcion"].toLowerCase(),
          }))}
          className="form"
          optionClassName="form__label"
        />
        <CoursesFilter
          title="Course type"
          type="radio"
          options={[
            {
              child: "free",
              value: "free",
              checked: true,
            },
            ,
            "paid",
          ]}
          className="form"
          optionClassName="form__label"
        />
        <CoursesFilter
          title="Course rating"
          name="stars"
          type="radio"
          className="form"
          optionClassName="form__label"
          options={[
            {
              child: (
                <>
                  <FaStar color="#febe42" />
                  <FaStar color="#febe42" />
                  <FaStar color="#febe42" />
                  <FaStar color="#febe42" />
                  <FaStar color="#febe42" />
                </>
              ),
              value: 5,
              checked: true,
            },
            {
              child: (
                <>
                  <FaStar color="#febe42" />
                  <FaStar color="#febe42" />
                  <FaStar color="#febe42" />
                  <FaStar color="#febe42" />
                  <FaStarHalfAlt color="#febe42" />
                </>
              ),
              value: 4.5,
            },
            {
              child: (
                <>
                  <FaStar color="#febe42" />
                  <FaStar color="#febe42" />
                  <FaStar color="#febe42" />
                  <FaStarHalfAlt color="#febe42" />
                  <FaRegStar color="#febe42" />
                </>
              ),
              value: 3.5,
            },
            {
              child: (
                <>
                  <FaStar color="#febe42" />
                  <FaStar color="#febe42" />
                  <FaStarHalfAlt color="#febe42" />
                  <FaRegStar color="#febe42" />
                  <FaRegStar color="#febe42" />
                </>
              ),
              value: 2.5,
            },
            {
              child: (
                <>
                  <FaStar color="#febe42" />
                  <FaStarHalfAlt color="#febe42" />
                  <FaRegStar color="#febe42" />
                  <FaRegStar color="#febe42" />
                  <FaRegStar color="#febe42" />
                </>
              ),
              value: 1.5,
            },
          ]}
        />
        <CoursesFilter
          title="Duration"
          type="radio"
          className="form"
          optionClassName="form__label"
          options={[
            {
              child: "+5 Hourse",
              value: "+5",
              checked: true,
            },
            {
              child: "+10 Hourse",
              value: "+10",
            },
            {
              child: "+20 Hourse",
              value: "+20",
            },
            {
              child: "+30 Hourse",
              value: "+30",
            },
          ]}
        />
      </div>
    </aside>
  );
};

export default CoursesFilters;
