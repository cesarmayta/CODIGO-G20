import { Form, Link } from "react-router-dom";

const FormAuth = ({
  action,
  method = "post",
  inputs,
  message = {},
  buttonText = "Get Started",
}) => {
  return (
    <Form action={action} method={method} className="form form--auth">
      {inputs?.map((input) => (
        <label
          key={crypto.randomUUID()}
          className="form__label form__label--auth"
          htmlFor={input.id}
        >
          <h5 className="form__label__title">{input.title}</h5>
          <div className="form__input-container">
            <input.Icon color="#808080" size={19.2} />
            <input
              className="form__input"
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              autoComplete={input.autoComplete}
              id={input.id}
              required={input.required}
            />
          </div>
        </label>
      ))}
      <h6 className="form__message">
        {message.text}
        {message.link && (
          <Link {...message.link} className="form__message__link" />
        )}
      </h6>
      <button className="button button--form">{buttonText}</button>
    </Form>
  );
};

export default FormAuth;
