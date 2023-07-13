import { FiLock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import fromFormDataToJson from "../../utils/fromFormDataToJson";
import FormAuth from "./FormAuth";
import { useNavigate } from "react-router-dom";

export const actionRegister = async ({ request }) => {
  
  const formData = await request.formData();
  const body = fromFormDataToJson(formData);
  const response = await fetch(
    "http://localhost:5000/user",
    {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );
  const data = await response.json();
  return data
};

const Register = () => {
  const nav = useNavigate()
  const inputs = [
    {
      Icon: HiOutlineMail,
      name: "email",
      title: "email",
      type: "email",
      autoComplete: "email",
      id: "emailLogin",
      placeholder: "name@example.com",
      required: true,
    },
    {
      Icon: FiLock,
      name: "password",
      title: "password",
      type: "password",
      autoComplete: "current-password",
      id: "passwordLogin",
      placeholder: "********",
      required: true,
    },
    {
      Icon: FiLock,
      name: "confirmPassword",
      title: "Confirm Password",
      type: "password",
      autoComplete: "current-password",
      id: "confirmPasswordLogin",
      placeholder: "********",
      required: true,
    },
  ];
  return (
    <div className="auth-container">
      <h2 className="auth__title">Create a new account</h2>
      <h3 className="auth__subtitle">Register to manage your account.</h3>
      <FormAuth
        action="/auth/register"
        inputs={inputs}
        message={{
          text: "Do you have an account ",
          link: {
            to: "../login",
            children: "Sign in",
            relative: true,
          },
        }}
      />
    </div>
  );
};

export default Register;
