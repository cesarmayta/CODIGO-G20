import { NavLink } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi2";
import {
  AiOutlinePlayCircle,
  AiOutlineMessage,
  AiOutlineInfo,
} from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const CourseNav = () => {
  return (
    <section className="section">
      <nav className="nav">
        <ul className="menu menu--course">
          <li className="menu__item">
            <NavLink
              to="./overview"
              className={({ isActive }) =>
                isActive
                  ? "menu__item__link menu__item__link--course menu__item__link--active"
                  : "menu__item__link menu__item__link--course"
              }
              style={{
                "--text": '"Overview"',
              }}
              relative
              preventScrollReset
            >
              <HiOutlineDocumentText
                className="menu__item__link__icon"
                aria-label="Overview"
              />
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu__item__link menu__item__link--course menu__item__link--active"
                  : "menu__item__link menu__item__link--course"
              }
              style={{
                "--text": '"Curriculum"',
              }}
              to="./curriculum"
              relative
              preventScrollReset
            >
              <AiOutlinePlayCircle
                className="menu__item__link__icon"
                aria-label="Curriculum"
              />
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu__item__link menu__item__link--course menu__item__link--active"
                  : "menu__item__link menu__item__link--course"
              }
              style={{
                "--text": '"Faq"',
              }}
              to="./faq"
              relative
              preventScrollReset
            >
              <AiOutlineMessage
                className="menu__item__link__icon"
                aria-label="Faq"
              />
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu__item__link menu__item__link--course menu__item__link--active"
                  : "menu__item__link menu__item__link--course"
              }
              style={{
                "--text": '"Announcement"',
              }}
              to="./announcement"
              relative
              preventScrollReset
            >
              <AiOutlineInfo
                className="menu__item__link__icon"
                aria-label="Announcement"
              />
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu__item__link menu__item__link--course menu__item__link--active"
                  : "menu__item__link menu__item__link--course"
              }
              style={{
                "--text": '"Reviews"',
              }}
              to="./reviews"
              relative
              preventScrollReset
            >
              <FaStar className="menu__item__link__icon" aria-label="Reviews" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default CourseNav;
