import {
	FIN_CARGANDO_MESAS,
	INICIO_CARGANDO_MESAS,
	SET_MESAS,
	SET_SELECCIONAR_MESA
} from '../types/types';

const initialState = {
	mesas: [],
	cargandoMesas: false,
	idMesaSeleccionada: -1
};

export const mesaReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SELECCIONAR_MESA:
			return {
				...state,
				idMesaSeleccionada: action.payload
			};
		case INICIO_CARGANDO_MESAS:
			return {
				...state,
				cargandoMesas: true
			};
		case FIN_CARGANDO_MESAS:
			return {
				...state,
				cargandoMesas: false
			};
		case SET_MESAS:
			return {
				...state,
				mesas: action.payload
			};

		default:
			return state;
	}
};
