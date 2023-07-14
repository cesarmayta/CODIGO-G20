import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="aside">
      <div className="aside-container aside-container--sidebar">
        <ul className="menu menu--sidebar">
          <li className="menu__item">
            <NavLink
              relative
              to="courses"
              className={({ isActive }) =>
                isActive
                  ? "menu__item__link menu__item__link--active"
                  : "menu__item__link"
              }
            >
              Courses
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              relative
              to="author"
              className={({ isActive }) =>
                isActive
                  ? "menu__item__link menu__item__link--active"
                  : "menu__item__link"
              }
            >
              Authors
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              relative
              to="levels"
              className={({ isActive }) =>
                isActive
                  ? "menu__item__link menu__item__link--active"
                  : "menu__item__link"
              }
            >
              Levels
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              relative
              to="categories"
              className={({ isActive }) =>
                isActive
                  ? "menu__item__link menu__item__link--active"
                  : "menu__item__link"
              }
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
