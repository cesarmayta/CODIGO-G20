import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { AdminContext } from "../../../contexts/AdminContext";
import { signIn } from "../../../services/authServices";
import { useNavigate } from "react-router-dom";

export const PublicLogin = ({
  showLogin,
  handleCloseLogin,
  handleChangeLoginToRegister,
}) => {
  const { authentication, setAuthentication } = useContext(AdminContext);
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const createUser = async (e) => {
    e.preventDefault();
    const response = await signIn(userCredentials);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.access_token);
      setAuthentication({
        ...authentication,
        isAuthenticated: true,
        successMessage: "Usuario logeado exitosamente",
      });
      navigate("/admin-panel");
    } else {
      setAuthentication({
        ...authentication,
        isAuthenticated: false,
        isError: true,
        errorMessage: "Credenciales incorrectas",
      });
    }
  };

  return (
    <Modal
      show={showLogin}
      onHide={handleCloseLogin}
      className="Auth-modal"
      animation={false}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="Auth-modal-logo">
          <img src="/vite.svg" alt="logo" />
        </div>
        <form className="Auth-modal-form" onSubmit={createUser}>
          <div className="Auth-modal-title">Iniciar sesión</div>
          <div
            className={`Auth-modal-alert${
              authentication.isError ? "" : " hidden"
            }`}
          >
            {authentication.errorMessage}
          </div>
          <div className="Auth-modal-form-group">
            <label htmlFor="username" className="Auth-modal-label">
              Username
            </label>
            <input
              type="text"
              className="Auth-modal-input"
              id="username"
              name="username"
              value={userCredentials.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="Auth-modal-form-group">
            <label htmlFor="password" className="Auth-modal-label">
              Contraseña
            </label>
            <input
              type="password"
              className="Auth-modal-input"
              id="password"
              name="password"
              value={userCredentials.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="Auth-modal-button"
            type="submit"
            disabled={authentication.isLoading ? true : false}
          >
            Iniciar sesión
          </button>
          <p className="Auth-modal-option">
            ¿No tienes cuenta?{" "}
            <span onClick={handleChangeLoginToRegister}>Registrar</span>
          </p>
        </form>
      </Modal.Body>
    </Modal>
  );
};
