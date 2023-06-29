import { URL_BACKEND } from '../../environments/environments';
import {
	AGREGAR_PLATO_A_PEDIDO,
	ELIMINAR_PEDIDO,
	FIN_CARGANDO_PEDIDOS_DB,
	INICIO_CARGANDO_PEDIDOS_DB,
	SET_PEDIDOS_DB
} from '../types/types';

import axios from 'axios';

const setInicioCargandoPedidosDB = () => ({ type: INICIO_CARGANDO_PEDIDOS_DB });
const setFinCargandoPedidosDB = () => ({ type: FIN_CARGANDO_PEDIDOS_DB });

export const getPedidosDB = () => {
	return async (dispatch) => {
		dispatch(setInicioCargandoPedidosDB());
		console.log("MOSTRANDO PEDIDOS")
		const endpoint = `${URL_BACKEND}/pedido`;
		const response = await axios.get(endpoint);
		console.log(response.data)
		dispatch({
			type: SET_PEDIDOS_DB,
			payload: response.data.pedidos
		});

		dispatch(setFinCargandoPedidosDB());
	};
};

export const agregarPlatoAction = (objPlato, mesaId) => {
	return {
		type: AGREGAR_PLATO_A_PEDIDO,
		payload: {
			objPlato: objPlato,
			mesaId: mesaId
		}
	};
};
export const eliminarPedidoPorMesaIdAction = (mesaId) => {
	return {
		type: ELIMINAR_PEDIDO,
		payload: mesaId
	};
};
