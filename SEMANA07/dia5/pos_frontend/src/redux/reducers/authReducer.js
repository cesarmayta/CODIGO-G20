import {
	FIN_CARGANDO_LOGIN,
	INICIO_CARGANDO_LOGIN,
	SET_SUCCESS_LOGIN
} from '../types/types';

const initialState = {
	autenticado: false,
	token: null,
	usu_nom: null,
	cargando: false,
	usu_tipo: null,
	usu_id: null,
	usu_img:null
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case INICIO_CARGANDO_LOGIN:
			return {
				...state,
				cargando: true
			};
		case FIN_CARGANDO_LOGIN:
			return {
				...state,
				cargando: false
			};
		case SET_SUCCESS_LOGIN:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};
