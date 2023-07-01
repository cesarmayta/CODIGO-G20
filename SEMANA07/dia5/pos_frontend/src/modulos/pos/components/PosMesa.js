import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { seleccionarMesaAction } from '../../../redux/actions/mesaAction';

const PosMesa = ({ objMesa }) => {
	const dispatch = useDispatch();

	const { idMesaSeleccionada } = useSelector((state) => state.mesa);

	let claseActivo = +idMesaSeleccionada === +objMesa.mesa_id ? 'activo' : '';

	const seleccionarMesa = () => {
		dispatch(seleccionarMesaAction(objMesa.mesa_id));
	};

	return (
		// <li className="mesas__mesa activo">
		<li className={`mesas__mesa ${claseActivo}`} onClick={seleccionarMesa}>
			<span className="mesas__titulo">Mesa</span>
			<span className="mesas__numero">{objMesa.mesa_nro}</span>
		</li>
	);
};

export default PosMesa;
