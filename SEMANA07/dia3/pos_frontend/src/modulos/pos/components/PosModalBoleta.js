import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { useSelector, useDispatch } from 'react-redux';
import { eliminarPedidoPorMesaIdAction } from '../../../redux/actions/pedidoAction';
import { postPagarPedido } from '../../../services/pedidoService';

const PosModalBoleta = ({ mostrar, setMostrar }) => {
	const dispatch = useDispatch();

	const [cargandoPago, setCargandoPago] = useState(false);

	const { pedidos } = useSelector((state) => state.pedido);
	const { idMesaSeleccionada } = useSelector((state) => state.mesa);

	const objPedidoActual = pedidos.find(
		(objPedido) => objPedido.mesaId === idMesaSeleccionada
	);

	let total = 0;
	if (objPedidoActual) {
		total = objPedidoActual.platos.reduce((prev, objPlatoPedido) => {
			return prev + +objPlatoPedido.cantidad * +objPlatoPedido.plato_pre;
		}, 0);
	}

	const handlePagar = () => {
		if (objPedidoActual) {
			setCargandoPago(true);
			postPagarPedido(objPedidoActual, idMesaSeleccionada).then((response) => {
				if (response.ok) {
					// limpiar el pedido que acaba de ser pagado
					dispatch(eliminarPedidoPorMesaIdAction(idMesaSeleccionada));
					// cerrar el modal
					setMostrar(false);
					// lanzar una notificación de éxito
					Swal.fire({
						icon: 'success',
						title: 'Éxito!',
						text: 'Pedido pagado con éxito'
					});
				}

				setCargandoPago(false);
			});
		}
	};

	return (
		<Modal size={'xl'} show={mostrar} onHide={() => setMostrar(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="container">
					<div className="col-md-12">
						<div className="invoice">
							<div className="invoice-company text-inverse f-w-600">
								CodiGo - POS
							</div>

							<div className="invoice-header">
								<div className="invoice-from">
									<small>from</small>
									<address className="m-t-5 m-b-5">
										<strong className="text-inverse">Twitter, Inc.</strong>
										<br />
										Street Address
										<br />
										City, Zip Code
										<br />
										Phone: (123) 456-7890
										<br />
										Fax: (123) 456-7890
									</address>
								</div>
								<div className="invoice-to">
									<small>to</small>
									<address className="m-t-5 m-b-5">
										<strong className="text-inverse">Company Name</strong>
										<br />
										Street Address
										<br />
										City, Zip Code
										<br />
										Phone: (123) 456-7890
										<br />
										Fax: (123) 456-7890
									</address>
								</div>
								<div className="invoice-date">
									<small>Invoice / July period</small>
									<div className="date text-inverse m-t-5">August 3,2012</div>
									<div className="invoice-detail">
										#0000123DSS
										<br />
										Services Product
									</div>
								</div>
							</div>

							<div className="invoice-content">
								<div className="table-responsive">
									<table className="table table-invoice">
										<thead>
											<tr>
												<th>Descripción</th>
												<th className="text-center" width="10%">
													P. Unitario
												</th>
												<th className="text-center" width="10%">
													Cantidad
												</th>
												<th className="text-right" width="20%">
													Sub Total
												</th>
											</tr>
										</thead>
										<tbody>
											{objPedidoActual
												? objPedidoActual.platos.map((objPlatoPedido) => {
														return (
															<tr>
																<td>
																	<span className="text-inverse">
																		{objPlatoPedido.plato_nom}
																	</span>
																</td>
																<td className="text-center">
																	S/ {objPlatoPedido.plato_pre}
																</td>
																<td className="text-center">
																	{objPlatoPedido.cantidad}
																</td>
																<td className="text-right">
																	S/{' '}
																	{+objPlatoPedido.plato_pre *
																		+objPlatoPedido.cantidad}
																</td>
															</tr>
														);
												  })
												: null}
										</tbody>
									</table>
								</div>

								<div className="invoice-price">
									<div className="invoice-price-left">
										<div className="invoice-price-row">
											<div className="sub-price">
												<small>SUBTOTAL</small>
												<span className="text-inverse">$4,500.00</span>
											</div>
											<div className="sub-price">
												<i className="fa fa-plus text-muted"></i>
											</div>
											<div className="sub-price">
												<small>PAYPAL FEE (5.4%)</small>
												<span className="text-inverse">$108.00</span>
											</div>
										</div>
									</div>
									<div className="invoice-price-right">
										<small>TOTAL</small>{' '}
										<span className="f-w-600">S/ {total}</span>
									</div>
								</div>
							</div>

							<div className="invoice-note">
								* Make all cheques payable to [Your Company Name]
								<br />
								* Payment is due within 30 days
								<br />* If you have any questions concerning this invoice,
								contact [Name, Phone Number, Email]
							</div>

							<div className="invoice-footer">
								<p className="text-center m-b-5 f-w-600">
									THANK YOU FOR YOUR BUSINESS
								</p>
								<p className="text-center">
									<span className="m-r-10">
										<i className="fa fa-fw fa-lg fa-globe"></i>{' '}
										matiasgallipoli.com
									</span>
									<span className="m-r-10">
										<i className="fa fa-fw fa-lg fa-phone-volume"></i>{' '}
										T:016-18192302
									</span>
									<span className="m-r-10">
										<i className="fa fa-fw fa-lg fa-envelope"></i>{' '}
										rtiemps@gmail.com
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<button
					className="btn btn-success"
					onClick={handlePagar}
					disabled={cargandoPago}
				>
					PAGAR
				</button>
			</Modal.Footer>
		</Modal>
	);
};

export default PosModalBoleta;
