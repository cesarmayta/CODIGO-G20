import Filter from "../shared/Filter";

const CoursesFilter = ({
  title,
  type,
  name: nameInitial,
  options,
  className,
  optionClassName,
  classNameList,
}) => {
  const name =
    nameInitial ||
    title
      .split(" ")
      .map((word) => word.toLowerCase())
      .join("-");
  const optionsMapped = options.map((option) => {
    if (typeof option === "object") return option;
    return {
      child: option,
      value: option,
      checked: false,
    };
  });
  return (
    <section className="section">
      <div className="section-container section-container--filter">
        <h2 className="section__title section__title--filter">{title}</h2>
        <Filter
          optionClassName={optionClassName}
          className={className}
          classNameList={classNameList}
          options={optionsMapped}
          type={type}
          name={name}
        />
      </div>
    </section>
  );
};

export default CoursesFilter;
