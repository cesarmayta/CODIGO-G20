import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { format } from 'date-fns';

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true
				}
			}
		]
	}
};

const AdminDashboard = () => {
	const { platos, cargandoPlatos } = useSelector((state) => state.plato);
	const { pedidosDB } = useSelector((state) => state.pedido);

	let labels = [];
	let precios = [];

	if (platos.length > 0 && pedidosDB.length > 0) {
		labels = pedidosDB.map((objPedidoDB) => {
			let date = new Date(objPedidoDB.pedido_fech);
			return format(date, 'MM/dd hh:mm');
		});
		precios = pedidosDB.map((objPedidoDB) => {
			let total = 0;
			objPedidoDB.pedidoplatos.forEach((objPedidoPlato) => {
				let objPlato = platos.find(
					(plato) => plato.plato_id === objPedidoPlato.plato_id
				);
				total += +objPlato.plato_pre * +objPedidoPlato.pedidoplato_cant;
			});
			return total;
		});
	}

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Monto de venta',
				data: precios,
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)'],
				borderWidth: 1
			}
		]
	};

	return (
		<main className="container">
			<h1 className="display-4 mt-5">
				Dashboard CodiGo - <span className="text-danger">POS</span>
			</h1>
			<hr />
			<div className="row">
				<div className="col-12">
					<Bar data={data} options={options} />
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="card bg-dark text-white">
						<div className="card-body">
							<h4 className="card-title">Platos</h4>
							<h5 className="display-4 text-center">
								{cargandoPlatos ? (
									<div class="spinner-border text-light" role="status">
										<span class="sr-only">Loading...</span>
									</div>
								) : (
									platos.length
								)}
							</h5>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card bg-primary text-white">
						<div className="card-body">
							<h4 className="card-title">Mesas</h4>
							<h5 className="display-4 text-center">12</h5>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card bg-primary text-white">
						<div className="card-body">
							<h4 className="card-title">Usuarios</h4>
							<h5 className="display-4 text-center">12</h5>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AdminDashboard;
