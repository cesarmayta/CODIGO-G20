import { Link } from "react-router-dom";
import Filter from "../shared/Filter";

const AdminCourseLabel = ({
  title,
  childKey,
  valueKey,
  Icon,
  name,
  className,
  type = "text",
  options,
  optionSelected,
  setOption,
  urlTo,
  defaultValue,
}) => {
  const handleClickOption = ({ target }) => {
    setOption(type === "number" ? +target.dataset.value : target.dataset.value);
  };
  return (
    <label
      className={"form__label form__label--auth".concat(
        className ? ` ${className}` : ""
      )}
    >
      <h5 className="form__label__title">{title}</h5>
      {options.length <= 0 ? (
        <>
          <h6 className="form__label__subtitle">Not found</h6>
          <Link
            className="button button--form-course button--create"
            to={urlTo}
            relative
          >
            Create {title}
          </Link>
        </>
      ) : (
        <Filter
          dataOfURL={false}
          name={name}
          type="select"
          className="button button--select"
          classNameList="menu menu--categories"
          optionClassName="menu__item menu__item--categories"
          options={options
            ?.map((option) => ({
              child: option[childKey],
              value: option[valueKey],
              checked: option[childKey] === defaultValue,
            }))
            ?.map((option) => ({
              ...option,
              child: (
                <button
                  type="button"
                  data-value={option.value}
                  className="button button--option"
                  onClick={handleClickOption}
                >
                  {Icon && <Icon />}
                  {option.child}
                </button>
              ),
              text: (
                <div className="button__text">
                  {Icon && <Icon />}
                  {option.child}
                </div>
              ),
            }))}
          option={optionSelected}
        />
      )}
    </label>
  );
};

export default AdminCourseLabel;
