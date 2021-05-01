import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";
import { Card, Row, Container, Col, Image, Button } from "react-bootstrap";
import imag from "../../img/playa.png";
import { Link, useHistory } from "react-router-dom";

const SelectCateg = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	useEffect(() => {
		actions.getToken();
		actions.getCategorias();
		/*if (store.categorias) {
			history.push("/home");*/
	}, []);
	return (
		<>
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
				<div className="text-center">
					<h3>Select the Categories of preference</h3>
				</div>
				<Row>
					{store.categorias.map((item, index) => {
						return (
							<Col key={index}>
								<Card border="primary" style={{ width: "18rem" }} className="text-center mt-5">
									<Card.Header>{item.nombre}</Card.Header>
									<Card.Body>
										<Image src={imag} width="200px" height="200px" />
										<div className="mb-3">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="invalidCheck2"></input>
										</div>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};

export default SelectCateg;
