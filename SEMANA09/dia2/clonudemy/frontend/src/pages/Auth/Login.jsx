import { FiLock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import fromFormDataToJson from "../../utils/fromFormDataToJson";
import FormAuth from "./FormAuth";

export const actionLogin = async ({ request }) => {
  const formData = await request.formData();
  const body = fromFormDataToJson(formData);
  const response = await fetch(
    "https://apimocha.com/education-platform/auth/login",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );
  const data = await response.json();
  return data;
};

const Login = () => {
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
  ];
  return (
    <div className="auth-container">
      <h2 className="auth__title">Welcome back</h2>
      <h3 className="auth__subtitle">Login to manage your account.</h3>
      <FormAuth
        action="/auth/login"
        inputs={inputs}
        message={{
          text: "Don't have account ",
          link: {
            to: "../register",
            children: "Sign up",
            relative: true,
          },
        }}
      />
    </div>
  );
};

export default Login;
