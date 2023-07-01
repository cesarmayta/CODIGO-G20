import {
	AGREGAR_PLATO_A_PEDIDO,
	ELIMINAR_PEDIDO,
	FIN_CARGANDO_PEDIDOS_DB,
	INICIO_CARGANDO_PEDIDOS_DB,
	SET_PEDIDOS_DB
} from '../types/types';

const initialState = {
	pedidosDB: [],
	cargandoPedidosDB: false,

	pedidos: []
	// pedidos: [
	// 	{
	// 		mesaId: 5,
	// 		platos: [
	// 			{
	// 				plato_id: 3,
	// 				plato_nom: 'Tequeños',
	// 				plato_img:
	// 					'https://dojiw2m9tvv09.cloudfront.net/34469/product/disenosintitulo-78982.png',
	// 				plato_pre: '15.00',
	// 				categoria_id: 2,
	// 				cantidad: 2
	// 			}
	// 		]
	// 	}
	// ]
};

export const pedidoReducer = (state = initialState, action) => {
	switch (action.type) {
		case INICIO_CARGANDO_PEDIDOS_DB:
			return {
				...state,
				cargandoPedidosDB: true
			};
		case FIN_CARGANDO_PEDIDOS_DB:
			return {
				...state,
				cargandoPedidosDB: false
			};
		case SET_PEDIDOS_DB:
			return {
				...state,
				pedidosDB: action.payload
			};

		case AGREGAR_PLATO_A_PEDIDO:
			let pedidosState = [...state.pedidos];
			//Buscando la posición del objeto pedido que tenga la mesaId a la cual queremos
			//agregar el plato
			let posicionPedido = pedidosState.findIndex(
				(objPedido) => objPedido.mesaId === action.payload.mesaId
			);
			if (posicionPedido >= 0) {
				// implica que ya existía un pedido para la mesaId a la cual queremos agregar el plato
				// Entonces buscamos el plato en la mesa encontrada
				let posicionPlato = pedidosState[posicionPedido].platos.findIndex(
					(objPlato) => objPlato.plato_id === action.payload.objPlato.plato_id
				);
				// analizamos si la posición del plato es mayor o igual 0 para
				// agregar una unidad en caso de que existiera, o agregar el primer plato
				// en caso de que no existiera
				if (posicionPlato >= 0) {
					pedidosState[posicionPedido].platos[posicionPlato].cantidad += 1;
				} else {
					// Implica que es el primer item del plato que agregamos a la mesa
					let objPlatoNuevo = {
						...action.payload.objPlato,
						cantidad: 1
					};
					pedidosState[posicionPedido].platos.push(objPlatoNuevo);
				}
			} else {
				// implica que es el primer plato de la mesaId
				// Entonces creamos un objeto pedido nuevo con el primer plato de la mesa
				let objPedidoNuevo = {
					mesaId: action.payload.mesaId,
					platos: [
						{
							...action.payload.objPlato,
							cantidad: 1
						}
					]
				};
				pedidosState.push(objPedidoNuevo);
			}
			return {
				...state,
				pedidos: pedidosState
			};

		case ELIMINAR_PEDIDO:
			let copiaPedidos = [...state.pedidos];
			copiaPedidos = copiaPedidos.filter(
				(objPedido) => objPedido.mesaId !== action.payload
			);
			return {
				...state,
				pedidos: copiaPedidos
			};
		default:
			return state;
	}
};
