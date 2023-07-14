import { useOutletContext } from "react-router-dom";
import CourseTopic from "./CourseTopic";

const CourseFaq = () => {
  const course = useOutletContext();
  return (
    <div className="section-container section-container--info section-container--course">
      <h2 className="section__title section__title--course">Course Faq</h2>

      <ul className="menu menu--topics">
        {course?.topics?.map((topic) => (
          <CourseTopic key={topic.id} topic={topic}>
            <li className="menu__item menu__item--class">
              <p className="menu__item__paragraph">
                The primary goal of this quick start guide is to introduce you
                to Unreal Engine 4`s (UE4) development environment. By the end
                of this guide, you`ll know how to set up and develop C++
                Projects in UE4. This guide shows you how to create a new Unreal
                Engine project, add a new C++ class to it, compile the project,
                and add an instance of a new class to your level. By the time
                you reach the end of this guide, you`ll be able to see your
                programmed Actor floating above a table in the level.
              </p>
            </li>
          </CourseTopic>
        ))}
      </ul>
    </div>
  );
};

export default CourseFaq;
