import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import axios from 'axios';
import { URL_BACKEND } from '../environments/environments';

export const postPagarPedido = async (objPedido, mesaId) => {
	let objPedidoBackend = {
		usu_id: 1,
		mesa_id: mesaId,
		pedido_est: 'solicitado',
		pedido_nro: uuidv4(),
		pedido_fech: format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
		pedidoplatos: objPedido.platos.map((objPlatoPedido) => {
			return {
				plato_id: objPlatoPedido.plato_id,
				pedidoplato_cant: objPlatoPedido.cantidad
			};
		})
	};
	const endpoint = `${URL_BACKEND}/pedido`;
	const response = await axios.post(
		endpoint,
		JSON.stringify(objPedidoBackend),
		{
			headers: {
				'Content-type': 'application/json'
			}
		}
	);
	return response.data;
};
