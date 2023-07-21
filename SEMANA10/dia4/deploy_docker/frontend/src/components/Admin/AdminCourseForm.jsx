import { useLayoutEffect, useRef, useState } from "react";
import { MdOutlineSubtitles, MdPerson } from "react-icons/md";
import { Form } from "react-router-dom";
import useAuthors from "../../hooks/useAuthors";
import useCategories from "../../hooks/useCategories";
import useLevels from "../../hooks/useLevels";
import fromFormDataToJson from "../../utils/fromFormDataToJson";
import AdminCourseLabel from "./AdminCourseLabel";

const AdminCourseForm = ({
  cb,
  method = "POST",
  labelsExtra,
  url,
  course,
  buttonText,
}) => {
  const form = useRef();
  const { authors, getAuthors } = useAuthors();
  const { levels, getLevels } = useLevels();
  const { categories, getCategories } = useCategories();

  const [author, setAuthor] = useState();
  const [level, setLevel] = useState();
  const [category, setCategory] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const jsonData = fromFormDataToJson(formData);
    const response = await fetch(url || "http://127.0.0.1:5000/curso", {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body:
        method !== "DELETE" &&
        JSON.stringify({
          titulo: jsonData.title,
          descripcion: jsonData.description,
          nivel_id: level,
          categoria_id: category,
          autor_id: author,
          duracion: jsonData.duration,
          precio: jsonData.price,
          imagen: jsonData.photo,
          clases: jsonData.clases || 10,
        }),
    });
    const data = await response.json();
    cb(data.content);
  };

  useLayoutEffect(() => {
    getAuthors();
    getCategories();
    getLevels();
  }, []);

  return (
    <Form ref={form} onSubmit={handleSubmit} className="form">
      {method !== "DELETE" && (
        <>
          <label htmlFor="title" className="form__label form__label--auth">
            <h5 className="form__label__title">Title</h5>
            <div className="form__input-container">
              <MdOutlineSubtitles color="#808080" size={19.2} />
              <input
                className="form__input form__input"
                type="text"
                name="title"
                placeholder="Your awesome title"
                id="title"
                defaultValue={course?.title}
                required
              />
            </div>
          </label>
          <label
            htmlFor="description"
            className="form__label form__label--auth"
          >
            <h5 className="form__label__title">Description</h5>
            <textarea
              className="form__textarea"
              name="description"
              placeholder="Your awesome description"
              id="description"
              defaultValue={course?.description}
              required={true}
            />
          </label>
          {labelsExtra?.map((labelExtra) => (
            <label
              key={crypto.randomUUID()}
              htmlFor={labelExtra.id}
              className={"form__label form__label--auth".concat(
                labelExtra.className ? ` ${labelExtra.className}` : ""
              )}
            >
              <h5 className="form__label__title">{labelExtra.title}</h5>
              <div className="form__input-container">
                <labelExtra.Icon color="#808080" size={19.2} />
                <input
                  className="form__input form__input"
                  type={labelExtra.type}
                  name={labelExtra.name}
                  id={labelExtra.id}
                  defaultValue={labelExtra.defaultValue}
                  placeholder={labelExtra.placeholder}
                  required={labelExtra.required || true}
                />
              </div>
            </label>
          ))}
          <AdminCourseLabel
            options={authors}
            className={
              method === "POST"
                ? "form__label--option"
                : "form__label--option-filter"
            }
            name="author"
            title="Author"
            childKey="autor_nombre"
            valueKey="autor_id"
            type="number"
            urlTo="../author"
            Icon={MdPerson}
            setOption={setAuthor}
            optionSelected={author}
            defaultValue={course?.teacher}
          />
          <AdminCourseLabel
            options={levels}
            name="level"
            title="Level"
            childKey="nivel_descripcion"
            valueKey="nivel_id"
            type="number"
            className="form__label--option"
            urlTo="../levels"
            setOption={setLevel}
            optionSelected={level}
            defaultValue={course?.level}
          />
          <AdminCourseLabel
            options={categories}
            name="category"
            title="Category"
            className="form__label--option"
            childKey="categoria_descripcion"
            valueKey="categoria_id"
            type="number"
            setOption={setCategory}
            urlTo="../categories"
            optionSelected={category}
            defaultValue={course?.category}
          />
        </>
      )}
      <button type="submit" className="button button--form-course">
        {buttonText}
      </button>
    </Form>
  );
};

export default AdminCourseForm;
