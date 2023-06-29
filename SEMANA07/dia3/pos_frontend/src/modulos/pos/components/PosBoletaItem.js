import React from 'react';

export const PosBoletaItem = ({ objPlatoPedido }) => {
	return (
		<li className="comanda__item">
			<p className="comanda__nombre">
				<span>
					<strong>{objPlatoPedido.plato_nom}</strong>
				</span>
				<span>Precio: S/ {objPlatoPedido.plato_pre}</span>
			</p>
			<p className="comanda__cantidad">{objPlatoPedido.cantidad}</p>
			<p className="comanda__precio">
				<strong>
					S/ {+objPlatoPedido.cantidad * +objPlatoPedido.plato_pre}
				</strong>
			</p>
		</li>
	);
};
