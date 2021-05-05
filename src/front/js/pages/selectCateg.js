import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";
import { Card, Row, Container, Col, Image, Button } from "react-bootstrap";
import imag from "../../img/playa.png";
import { Link, useHistory } from "react-router-dom";
import "../../styles/categories.scss";

const SelectCateg = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [check, setCheck] = useState("");

	const CheckCategoria = (event, categSelected) => {
		if (event.target.checked == true) {
			store.usuario.categorias.push(categSelected);

			console.log(store.usuario, "checked");
		} else {
			store.usuario.categorias.splice(
				store.usuario.categorias.findIndex(v => v.id === categSelected.id),
				1
			);
			console.log(store.usuario, "unchecked");
		}
	};
	console.log(store.usuario, "usuario");

	useEffect(() => {
		actions.getToken();
		actions.getCategorias();
	}, []);
	return (
		<div className="body-categ">
			<Container>
				<Button
					onClick={() => {
						actions.logOut();
						if (store.logOut == true) {
							history.push("/login");
						}
					}}>
					LogOut
				</Button>
				<div className="title-categ text-center">
					<h2>
						<i>Select the Categories of preference</i>
					</h2>
				</div>
				<Row>
					{store.categorias.map((item, index) => {
						return (
							<Col key={index} className="card-all">
								<Card border="primary" style={{ width: "9rem" }} className="card text-center my-3">
									<Card.Header className="title">{item.nombre}</Card.Header>
									<Card.Body>
										<div className="input mb-3">
											<input
												className="form-check-input"
												type="checkbox"
												value={false}
												id="invalidCheck2"
												onChange={e => CheckCategoria(e, item)}
											/>
										</div>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
				<div className="text-center">
					<Button onClick={() => actions.usuarioUpdated()}>Listo</Button>
				</div>
			</Container>
		</div>
	);
};

export default SelectCateg;
