import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import AdminDashboard from './pages/AdminDashboard';
import { useDispatch } from 'react-redux';
import { getPlatos } from '../../redux/actions/platoAction';
import { getPedidosDB } from '../../redux/actions/pedidoAction';

const AdminRouter = () => {
	const dispatch = useDispatch();
	dispatch(getPlatos());
	dispatch(getPedidosDB());

	return (
		<>
			<AdminHeader />
			<Switch>
				<Route path="/admin/dashboard" component={AdminDashboard} />
			</Switch>
		</>
	);
};

export default AdminRouter;
