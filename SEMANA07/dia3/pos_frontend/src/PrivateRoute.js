import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
	const { autenticado, cargando } = useSelector((state) => state.auth);

	if (cargando) {
		return <p>CARGANDO...</p>;
	} else {
		if (autenticado) {
			return <Route path={props.path} component={props.component} />;
		} else {
			return <Redirect to="/auth/login" />;
		}
	}
};

export default PrivateRoute;
