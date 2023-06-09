import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { AdminContext } from "../../../contexts/AdminContext";
import { signUp } from "../../../services/authServices";

export const PublicRegister = ({
  showRegister,
  handleCloseRegister,
  handleChangeRegisterToLogin,
}) => {
  const [registerState, setRegisterState] = useState({
    isLoading: false,
    isError: false,
    errorMessage: "",
    successMessage: "",
  });
  const [newUser, setNewUSer] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setNewUSer({
      ...newUser,
      [name]: value,
    });
  };

  const createUser = async (e) => {
    e.preventDefault();
    setRegisterState({
      ...registerState,
      isLoading: true,
    });
    try {
      const response = await signUp(newUser);
      if (response.success) {
        return setRegisterState({
          ...registerState,
          isAuthenticated: true,
          isLoading: false,
        });
      }
      return setRegisterState({
        ...registerState,
        isError: true,
        errorMessage: response.message,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      return setRegisterState({
        ...registerState,
        isError: true,
        errorMessage: "No se pudo establecer conexión con el servidor",
        isLoading: false,
      });
    }
  };

  return (
    <Modal
      show={showRegister}
      onHide={handleCloseRegister}
      className="Auth-modal"
      animation={false}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="Auth-modal-logo">
          <img src="/vite.svg" alt="logo" />
        </div>
        <form className="Auth-modal-form" onSubmit={createUser}>
          <div className="Auth-modal-title">Registrar</div>
          <div
            className={`Auth-modal-alert${
              registerState.isError ? "" : " hidden"
            }`}
          >
            {registerState.errorMessage}
          </div>
          <div className="Auth-modal-form-group">
            <label htmlFor="userName" className="Auth-modal-label">
              Nombre
            </label>
            <input
              type="text"
              className="Auth-modal-input"
              id="name"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="Auth-modal-form-group">
            <label htmlFor="userEmail" className="Auth-modal-label">
              Correo
            </label>
            <input
              type="text"
              className="Auth-modal-input"
              id="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="Auth-modal-form-group">
            <label htmlFor="userPassword" className="Auth-modal-label">
              Contraseña
            </label>
            <input
              type="password"
              className="Auth-modal-input"
              id="password"
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
            />
          </div>
          <button className="Auth-modal-button" type="submit">
            Crear cuenta
          </button>
          <p className="Auth-modal-option">
            ¿Tienes una cuenta?{" "}
            <span onClick={handleChangeRegisterToLogin}>Iniciar sesión</span>
          </p>
        </form>
      </Modal.Body>
    </Modal>
  );
};
