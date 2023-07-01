import React from 'react';
import PosBoleta from '../components/PosBoleta';
import PosCategorias from '../components/PosCategorias';
import PosHeader from '../components/PosHeader';
import PosMesas from '../components/PosMesas';
import PosPlatos from '../components/PosPlatos';

const PosPos = () => {
	return (
		<>
			<PosHeader />
			<main className="pos-container">
				<PosCategorias />
				<section className="tabla">
					<PosMesas />
					<div className="pedido">
						<PosPlatos />
						<PosBoleta />
					</div>
				</section>
			</main>
		</>
	);
};

export default PosPos;
