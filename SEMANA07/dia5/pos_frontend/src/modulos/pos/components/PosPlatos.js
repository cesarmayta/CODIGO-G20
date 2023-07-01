import React, { useEffect } from 'react';
import PosPlato from './PosPlato';
import { useSelector, useDispatch } from 'react-redux';
import { getPlatosPorCategoriaId } from '../../../redux/actions/platoAction';

const PosPlatos = () => {
	const { idCategoriaSeleccionada, categorias } = useSelector((state) => state.categoria);
	const { platosPorCategoria } = useSelector((state) => state.plato);
	
	let objCategoria = categorias.find((objCategoria)=>objCategoria.categoria_id === idCategoriaSeleccionada);

	// consuman la lista de platos que están en el estado global de la app

	const dispatch = useDispatch();

	useEffect(() => {
		if (idCategoriaSeleccionada !== -1) {
			dispatch(getPlatosPorCategoriaId(idCategoriaSeleccionada));
		}
	}, [idCategoriaSeleccionada, dispatch]);

	return (
		<div className="carta">
			<h3>
				Lista de Platos Categoria: &nbsp;{' '}
				<span className="color-secundario">{objCategoria ? objCategoria.categoria_nom : "Seleccione Categoria"}</span>
			</h3>

			<div className="carta__platos">
				{platosPorCategoria.map((objPlato) => {
					return <PosPlato objPlato={objPlato} key={objPlato.plato_id} />;
				})}
			</div>
		</div>
	);
};

export default PosPlatos;
