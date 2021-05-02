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

	const SelectCateg = () => {
		if (check == true) {
			let value = true;
		} else {
			store.usuario.categorias;
		}
	};
	useEffect(() => {});
	useEffect(() => {
		actions.getToken();
		actions.getCategorias();
		/*if (store.categorias) {
			history.push("/home");*/
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
				<div className="title text-center">
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
												onChange={e => setCheck(e.target.value)}>
												{console.log(check, "este es el check")}
											</input>
										</div>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
				<div className="text-center">
					<Button onClick={() => ShowAlert()}>Listo</Button>
				</div>
			</Container>
		</div>
	);
};

export default SelectCateg;
