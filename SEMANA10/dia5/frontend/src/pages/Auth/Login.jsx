import { FiLock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import fromFormDataToJson from "../../utils/fromFormDataToJson";
import FormAuth from "./FormAuth";

export const actionLogin = async ({ request }) => {
  const formData = await request.formData();
  const body = fromFormDataToJson(formData);
  const response = await fetch(
    "http://localhost:5000/user/auth",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    let token = data.token;
    if(token)
      {
        let payload = token.split('.')[1];
        let payloadDecoded = atob(payload);
        let payloadJSON = JSON.parse(payloadDecoded);
        console.log("id de usuario : " + payloadJSON._id);
        let isAdmin = payloadJSON.isAdmin
        localStorage.setItem('token', token);
        if(isAdmin){
          window.location.href = "/admin";
        }else{
          window.location.href = "/member";
        }
      }
    else
      {
        console.log('no hay token')
        window.location.href = "/auth/login";
      }
  }
  return true;
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
