import { createElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FilterOption = ({ type, option, className, as = "li", name }) => {
  const { child, value, lastChecked, checked } = option;
  const location = useLocation();
  const navigate = useNavigate();
  const changeOption = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const search = new URLSearchParams(location.search.replace("?", ""));
    search.set(name, value);
    navigate(`${location.pathname}?${search.toString()}`, {
      preventScrollReset: true,
    });
  };
  if (type === "radio")
    return (
      <motion.label key={option.id} className={className} htmlFor={value}>
        <motion.input
          onChange={changeOption}
          className={className && `${className}__input`}
          name={name}
          id={value}
          type="radio"
          value={value}
          defaultChecked={checked}
          initial={{
            "--scale-value": lastChecked === checked ? (checked ? 1 : 0) : 0,
            boxShadow:
              lastChecked === checked
                ? checked
                  ? "0 0 0rem 0.1rem #2a41e8"
                  : "0 0 0rem 0.1rem #b4b4b4"
                : "0 0 0rem 0.1rem #b4b4b4",
          }}
          animate={{
            "--scale-value": checked ? 1 : 0,
            boxShadow: checked
              ? "0 0 0rem 0.1rem #2a41e8"
              : "0 0 0rem 0.1rem #b4b4b4",
          }}
          transition={{
            duration: 0.25,
          }}
        />
        <span className={className && `${className}__text`}>{child}</span>
      </motion.label>
    );
  if (type === "select") {
    return createElement(as, {
      "data-value": value,
      className,
      children: typeof child === "string" ? child.replace("-", " ") : child,
    });
  }
};

export default FilterOption;
