import { NavLink } from "react-router-dom";

const MemberSidebar = () => {
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
              Cursos
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MemberSidebar;
