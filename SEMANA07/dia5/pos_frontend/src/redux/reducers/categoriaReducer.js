import {
	FIN_CARGANDO_CATEGORIAS,
	INICIO_CARGANDO_CATEGORIAS,
	SET_CATEGORIAS,
	SET_SELECCIONAR_CATEGORIA
} from '../types/types';

let initialState = {
	categorias: [],
	cargandoCategorias: false,
	idCategoriaSeleccionada: -1
};

export const categoriaReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SELECCIONAR_CATEGORIA:
			return {
				...state,
				idCategoriaSeleccionada: action.payload
			};
		case INICIO_CARGANDO_CATEGORIAS:
			return {
				...state,
				cargandoCategorias: true
			};
		case FIN_CARGANDO_CATEGORIAS:
			return {
				...state,
				cargandoCategorias: false
			};
		case SET_CATEGORIAS:
			return {
				...state,
				categorias: action.payload
			};

		default:
			return state;
	}
};
