import { BsFillPenFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const MenuEdit = ({ handleUpdate = () => {}, handleDelete = () => {} }) => {
  return (
    <ul className="menu menu--course menu--edit">
      <li className="menu__item menu__item--edit">
        <button onClick={handleUpdate} className="button button--edit">
          <BsFillPenFill size={20} />
        </button>
        <h3 className="menu__item__title">Update</h3>
      </li>
      <li className="menu__item menu__item--edit">
        <button onClick={handleDelete} className="button button--delete">
          <AiFillDelete size={20} />
        </button>
        <h3 className="menu__item__title">Delete</h3>
      </li>
    </ul>
  );
};

export default MenuEdit;
