import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Stars = ({ stars, className, color = "#febe42", ...props }) => {
  return (
    <ul
      className={"menu menu--stars".concat(className ? ` ${className}` : "")}
      {...props}
    >
      {stars.map((startStatus) => (
        <li key={crypto.randomUUID()} className="menu__item menu__item--stars">
          {startStatus === "complete" ? (
            <FaStar color={color} />
          ) : startStatus === "half" ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Stars;
