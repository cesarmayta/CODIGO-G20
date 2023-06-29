import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PosPos from './pages/PosPos';
import { useDispatch } from 'react-redux';
import { getMesas } from '../../redux/actions/mesaAction';
import { getCategorias } from '../../redux/actions/categoriaAction';

const PosRouter = () => {
	const dispatch = useDispatch();

	dispatch(getMesas());
	dispatch(getCategorias());

	return (
		<>
			<Switch>
				<Route path="/pos/pos" component={PosPos} />
			</Switch>
		</>
	);
};

export default PosRouter;
