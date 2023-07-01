import { URL_BACKEND } from '../../environments/environments';
import {
	FIN_CARGANDO_PLATOS,
	FIN_CARGANDO_PLATOS_POR_CATEGORIA,
	INICIO_CARGANDO_PLATOS,
	INICIO_CARGANDO_PLATOS_POR_CATEGORIA,
	SET_PLATOS,
	SET_PLATOS_POR_CATEGORIA
} from '../types/types';
import axios from 'axios';

const setCargandoPlatosPorCategoria = () => {
	return {
		type: INICIO_CARGANDO_PLATOS_POR_CATEGORIA
	};
};

const setFinCargandoPlatosPorCategoria = () => {
	return {
		type: FIN_CARGANDO_PLATOS_POR_CATEGORIA
	};
};

const setInicioCargandoPlatos = () => {
	return { type: INICIO_CARGANDO_PLATOS };
};

const setFinCargandoPlatos = () => {
	return { type: FIN_CARGANDO_PLATOS };
};

export const getPlatosPorCategoriaId = (categoriaId) => {
	return async (dispatch) => {
		dispatch(setCargandoPlatosPorCategoria());

		const endpoint = `${URL_BACKEND}/categoria/${categoriaId}/platos`;
		const response = await axios.get(endpoint);
		dispatch({
			type: SET_PLATOS_POR_CATEGORIA,
			payload: response.data.Platos
		});

		dispatch(setFinCargandoPlatosPorCategoria());
	};
};

export const getPlatos = () => {
	return async (dispatch) => {
		dispatch(setInicioCargandoPlatos());

		const endpoint = `${URL_BACKEND}/plato`;
		const response = await axios.get(endpoint);
		console.log(response);
		dispatch({
			type: SET_PLATOS,
			payload: response.data.content
		});

		dispatch(setFinCargandoPlatos());
	};
};
