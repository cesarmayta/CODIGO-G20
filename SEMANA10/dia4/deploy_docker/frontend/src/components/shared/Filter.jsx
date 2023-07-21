import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLocation } from "react-router-dom";
import FilterOption from "./FilterOption";

const Filter = ({
  type,
  dataOfURL = true,
  options: optionsGetted,
  className,
  optionClassName,
  classNameList,
  option,
  name,
}) => {
  const arrowSelect = useRef();
  const menu = useRef();
  const [options, setOptions] = useState(optionsGetted);
  const location = useLocation();

  const toggleMenu = () => {
    arrowSelect.current.classList.toggle("button__arrow--open");
    menu.current.classList.toggle("menu--categories-open");
  };

  const handleChangeOptionDefault = () => {
    const search = new URLSearchParams(location.search.replace("?", ""));
    const value = search.get(name);
    setOptions(
      options.map((option) => {
        return {
          ...option,
          checked: value ? value === String(option.value) : option.checked,
          lastChecked: option.checked,
        };
      })
    );
  };

  const handleChangeOption = () => {
    setOptions(
      options.map((opt) => ({
        ...opt,
        checked: opt.value === option,
      }))
    );
  };

  const depsEffect = !dataOfURL ? option : location;
  useLayoutEffect(() => {
    if (!dataOfURL) handleChangeOption();
    else handleChangeOptionDefault();
  }, [depsEffect]);

  useEffect(() => {
    setOptions((prevOptions) =>
      !prevOptions?.length ? optionsGetted : prevOptions
    );
  }, [optionsGetted]);

  if (type === "radio")
    return (
      <div className={className}>
        {options?.map((option) => (
          <FilterOption
            className={optionClassName}
            key={crypto.randomUUID()}
            option={option}
            type={type}
            name={name}
          />
        ))}
      </div>
    );
  if (type === "select") {
    const optionChecked = options?.find((option) => option.checked);
    return (
      <div className="container container--select">
        <button type="button" onClick={toggleMenu} className={className}>
          {optionChecked?.text || optionChecked?.child || (
            <span>Without option selected</span>
          )}
          <div ref={arrowSelect} className="button__arrow">
            <IoMdArrowDropdown />
          </div>
        </button>
        <ul ref={menu} className={classNameList}>
          {options?.map((option) => (
            <FilterOption
              className={optionClassName}
              key={crypto.randomUUID()}
              option={option}
              type={type}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default Filter;
