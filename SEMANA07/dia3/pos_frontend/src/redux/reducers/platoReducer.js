import {
	FIN_CARGANDO_PLATOS,
	FIN_CARGANDO_PLATOS_POR_CATEGORIA,
	INICIO_CARGANDO_PLATOS,
	INICIO_CARGANDO_PLATOS_POR_CATEGORIA,
	SET_PLATOS,
	SET_PLATOS_POR_CATEGORIA
} from '../types/types';

const initialState = {
	// platosSeleccionados por categoría seleccionada
	platosPorCategoria: [],
	cargandoPlatosPorCategoria: false,
	// todos los platos de la bd
	platos: [],
	cargandoPlatos: false
};

export const platoReducer = (state = initialState, action) => {
	switch (action.type) {
		case INICIO_CARGANDO_PLATOS:
			return {
				...state,
				cargandoPlatos: true
			};
		case FIN_CARGANDO_PLATOS:
			return {
				...state,
				cargandoPlatos: false
			};
		case SET_PLATOS:
			return {
				...state,
				platos: action.payload
			};

		case INICIO_CARGANDO_PLATOS_POR_CATEGORIA:
			return {
				...state,
				cargandoPlatosPorCategoria: true
			};
		case FIN_CARGANDO_PLATOS_POR_CATEGORIA:
			return {
				...state,
				cargandoPlatosPorCategoria: false
			};
		case SET_PLATOS_POR_CATEGORIA:
			return {
				...state,
				platosPorCategoria: action.payload
			};
		default:
			return state;
	}
};
