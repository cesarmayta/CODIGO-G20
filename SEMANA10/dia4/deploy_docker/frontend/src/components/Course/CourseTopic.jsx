import { useRef } from "react";

const CourseTopic = ({ topic, children }) => {
  const menu = useRef();
  const button = useRef();
  const handleToggle = () => {
    menu.current.classList.toggle("menu--categories-open");
    menu.current.classList.toggle("menu--classes--open");
    button.current.classList.toggle("button--topic-open");
  };
  return (
    <li className="menu__item menu__item--topic">
      <button
        onClick={handleToggle}
        ref={button}
        className="button button--topic"
      >
        {topic.title}
        <div className="line"></div>
      </button>
      <ul ref={menu} className="menu menu--categories menu--classes">
        {children}
      </ul>
    </li>
  );
};

export default CourseTopic;
