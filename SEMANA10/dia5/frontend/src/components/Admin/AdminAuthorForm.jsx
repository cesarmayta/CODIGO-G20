import { useRef } from "react";
import { MdOutlineSubtitles, MdPhotoSizeSelectActual } from "react-icons/md";
import { Form } from "react-router-dom";
import fromFormDataToJson from "../../utils/fromFormDataToJson";

const AdminAuthorForm = ({
  method = "POST",
  cb,
  url,
  buttonText = "Create author",
  author,
}) => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const jsonData = fromFormDataToJson(formData);
    const response = await fetch(url || "http://127.0.0.1:5000/autor", {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body:
        method !== "DELETE" &&
        JSON.stringify({
          nombre: jsonData.name,
          foto: jsonData.photo,
          descripcion: jsonData.description,
        }),
    });
    const data = await response.json();
    cb(data.content);
  };

  return (
    <Form ref={form} onSubmit={handleSubmit} method="post" className="form">
      {method !== "DELETE" && (
        <>
          <label htmlFor="name" className="form__label form__label--auth">
            <h5 className="form__label__title">Name</h5>
            <div className="form__input-container">
              <MdOutlineSubtitles color="#808080" size={19.2} />
              <input
                className="form__input form__input"
                type="text"
                name="name"
                placeholder="Name of author"
                id="name"
                defaultValue={author?.autor_nombre}
                required
              />
            </div>
          </label>
          <label htmlFor="photo" className="form__label form__label--auth">
            <h5 className="form__label__title">Photo</h5>
            <div className="form__input-container">
              <MdPhotoSizeSelectActual color="#808080" size={19.2} />
              <input
                className="form__input form__input"
                type="text"
                name="photo"
                placeholder="Photo of author"
                id="photo"
                defaultValue={author?.autor_foto}
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
              defaultValue={author?.autor_descripcion}
              required={true}
            />
          </label>
        </>
      )}
      <button type="submit" className="button button--form-course">
        {buttonText}
      </button>
    </Form>
  );
};

export default AdminAuthorForm;
