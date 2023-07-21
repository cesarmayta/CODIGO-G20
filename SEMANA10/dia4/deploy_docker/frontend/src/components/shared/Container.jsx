import MenuEdit from "./MenuEdit";

const Container = ({
  children,
  className,
  style,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <div
      className={className ? `${className} card-container--edit` : ""}
      style={style}
    >
      <MenuEdit handleDelete={handleDelete} handleUpdate={handleUpdate} />
      {children}
    </div>
  );
};

export default Container;
