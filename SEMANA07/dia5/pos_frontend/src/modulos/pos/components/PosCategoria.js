import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { seleccionarCategoriaAction } from '../../../redux/actions/categoriaAction';

const PosCategoria = ({ objCategoria }) => {
	const dispatch = useDispatch();
	const seleccionarCategoria = () => {
		dispatch(seleccionarCategoriaAction(objCategoria.categoria_id));
	};
	const { idCategoriaSeleccionada } = useSelector((state) => state.categoria);
	const activeClass =
		idCategoriaSeleccionada === objCategoria.categoria_id ? 'active' : '';

	return (
		<li onClick={seleccionarCategoria} className={activeClass}>
			<img src="/images/plato_blanco.svg" alt="" />
			<span>{objCategoria.categoria_nom}</span>
		</li>
	);
};

export default PosCategoria;
