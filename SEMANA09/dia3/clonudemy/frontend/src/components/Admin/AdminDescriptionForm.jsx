import { useRef } from "react";
import { Form } from "react-router-dom";
import fromFormDataToJson from "../../utils/fromFormDataToJson";

const AdminDescriptionForm = ({
  cb,
  url = "http://127.0.0.1:5000/nivel",
  textButton,
  defaultValue,
  method = "POST",
}) => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const jsonData = fromFormDataToJson(formData);
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body:
        method !== "DELETE" &&
        JSON.stringify({
          descripcion: jsonData.description,
        }),
    });
    const data = await response.json();
    cb(data.content);
  };
  return (
    <Form ref={form} onSubmit={handleSubmit} method="post" className="form">
      {method !== "DELETE" && (
        <label htmlFor="description" className="form__label form__label--auth">
          <h5 className="form__label__title">Description</h5>
          <textarea
            className="form__textarea"
            name="description"
            placeholder="Your awesome description"
            id="description"
            required={true}
            defaultValue={defaultValue}
          />
        </label>
      )}

      <button type="submit" className="button button--form-course">
        {textButton}
      </button>
    </Form>
  );
};

export default AdminDescriptionForm;
