import React, { useState } from 'react';
import { PosBoletaItem } from './PosBoletaItem';
import { useSelector } from 'react-redux';
import PosModalBoleta from './PosModalBoleta';

const PosBoleta = () => {
	const { pedidos } = useSelector((state) => state.pedido);
	const { idMesaSeleccionada, mesas } = useSelector((state) => state.mesa);
	const [mostrar, setMostrar] = useState(false);

	let objMesa = mesas.find((objMesa) => objMesa.mesa_id === idMesaSeleccionada);

	let objPedidoActual = pedidos.find(
		(objPedido) => objPedido.mesaId === idMesaSeleccionada
	);

	return (
		<div className="boleta">
			<h3>
				Pedido Mesa: &nbsp;
				<span className="color-secundario">
					{objMesa ? objMesa.mesa_nro : 'seleccione'}
				</span>
			</h3>
			<hr />
			<div className="comanda">
				<h4 className="comanda__mesa">
					{objMesa ? `Mesa ${objMesa.mesa_nro}` : 'seleccione'}
				</h4>
				<p className="comanda__usuario">Carlos Jimenez</p>
				<hr />

				<ul className="comanda__lista">
					{objPedidoActual
						? objPedidoActual.platos.map((objPlatoPedido, i) => {
								return (
									<PosBoletaItem objPlatoPedido={objPlatoPedido} key={i} />
								);
						  })
						: null}
				</ul>
				{idMesaSeleccionada !== -1 ? (
					<button
						className="boton boton-success boton-block"
						onClick={() => {
							setMostrar(true);
						}}
					>
						PAGAR
					</button>
				) : null}
			</div>
			<PosModalBoleta mostrar={mostrar} setMostrar={setMostrar} />
		</div>
	);
};

export default PosBoleta;
