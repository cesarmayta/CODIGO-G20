import React, { useState } from 'react';
import './../../../sass/login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { iniciarSesionAction } from '../../../redux/actions/authAction';

const AuthLogin = (props) => {
	const dispatch = useDispatch();
	const { autenticado, cargando } = useSelector((state) => state.auth);

	/*if (autenticado) {
		props.history.push('/admin/dashboard');
	}*/

	const [formulario, setFormulario] = useState({
		correo: 'cesarmayta@gmail.com',
		password: 'codigo2023'
	});

	const handleChange = (e) => {
		setFormulario({
			...formulario,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(iniciarSesionAction(formulario.correo, formulario.password));
	};

	return (
		<main className="login">
			<div className="login__form">
				<h1>Inicio de Sesión</h1>
				<form className="formulario" onSubmit={handleSubmit}>
					<label htmlFor="">Email:</label>
					<input
						type="email"
						className="formulario__input"
						placeholder="Email"
						name="correo"
						value={formulario.correo}
						onChange={handleChange}
					/>
					<label htmlFor="">Password:</label>
					<input
						type="password"
						className="formulario__input"
						placeholder="Password"
						name="password"
						value={formulario.password}
						onChange={handleChange}
					/>
					<button className="formulario__submit" type="submit">
						Iniciar Sesión
					</button>
				</form>
			</div>
		</main>
	);
};

export default AuthLogin;
