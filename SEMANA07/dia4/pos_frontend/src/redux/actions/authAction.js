import { URL_BACKEND } from '../../environments/environments';
import {
	FIN_CARGANDO_LOGIN,
	INICIO_CARGANDO_LOGIN,
	SET_SUCCESS_LOGIN
} from '../types/types';
import axios from 'axios';
const inicioCargandoLogin = () => {
	return {
		type: INICIO_CARGANDO_LOGIN
	};
};
const finCargandoLogin = () => {
	return {
		type: FIN_CARGANDO_LOGIN
	};
};

export const iniciarSesionAction = (correo, password) => {
	return async (dispatch) => {
		dispatch(inicioCargandoLogin());

		const endpoint = `${URL_BACKEND}/login/`;
		console.log(correo);
		console.log(password);
		const response = await axios.post(
			endpoint,
			JSON.stringify({ username: correo, password: password }),
			{
				headers: {
					'Content-type': 'application/json'
				}
			}
		);
		if (response.status === 200) {
			console.log(response.data);
			let token = response.data.access;
			localStorage.setItem('token', token);
			let payload = token.split('.')[1];
			let payloadDecoded = atob(payload);
			let payloadJSON = JSON.parse(payloadDecoded);
			console.log("nombre de usuario" + payloadJSON.usu_nom);
			console.log("foto de usuario " + payloadJSON.usu_img);
			dispatch({
				type: SET_SUCCESS_LOGIN,
				payload: {
					autenticado: true,
					usu_nom: payloadJSON.usu_nom,
					usu_id: payloadJSON.usu_id,
					usu_tipo: payloadJSON.usu_tipo,
					usu_img: payloadJSON.usu_img,
					token: token
				}
			});
		}
		dispatch(finCargandoLogin());
	};
};

export const iniciarSesionLocalStorage = () => {
	return async (dispatch) => {
		dispatch(inicioCargandoLogin());
		let token = localStorage.getItem('token');
		try {
			if (token) {
				/*const endpoint = `${URL_BACKEND}/verificar`;
				const response = await axios.post(endpoint, null, {
					headers: {
						authorization: `Bearer ${token}`
					}
				});*/
				//response.data.ok
				if (1==1) {
					let payload = token.split('.')[1];
					let payloadDecoded = atob(payload);
					let payloadJSON = JSON.parse(payloadDecoded);
					dispatch({
						type: SET_SUCCESS_LOGIN,
						payload: {
							autenticado: true,
							usu_nom: payloadJSON.usu_nom,
							usu_id: payloadJSON.usu_id,
							usu_tipo: payloadJSON.usu_tipo,
							token: token
						}
					});
					dispatch(finCargandoLogin());
				}
			} else {
				dispatch(finCargandoLogin());
			}
		} catch (error) {
			console.log('errosh');
			localStorage.removeItem('token');
			dispatch(finCargandoLogin());
		}
	};
};
