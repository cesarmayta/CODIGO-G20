import React from 'react';
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import PosRouter from './modulos/pos/PosRouter';

import AuthRouter from './modulos/auth/AuthRouter';
import AdminRouter from './modulos/admin/AdminRouter';
import PrivateRoute from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { iniciarSesionLocalStorage } from './redux/actions/authAction';
const App = () => {
	const dispatch = useDispatch();
	dispatch(iniciarSesionLocalStorage());
	return (
		<Router>
			<Switch>
				<Route path="/pos" component={PosRouter} />
				<Route path="/auth" component={AuthRouter} />
				<PrivateRoute path="/admin" component={AdminRouter} />
				<Redirect to="/pos/pos" />
			</Switch>
		</Router>
	);
};

export default App;
