import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";
import { Card, Row, Container, Col, Image, Button } from "react-bootstrap";
import imag from "../../img/think.png";
import { Link, useHistory } from "react-router-dom";
import "../../styles/categories.scss";

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
					<h3>
						<i>Select the Categories of preference</i>
					</h3>
				</div>
				<Row>
					{store.categorias.map((item, index) => {
						return (
							<Col key={index}>
								<Card border="primary" style={{ width: "18rem" }} className="text-center my-3">
									<Card.Header className="title">{item.nombre}</Card.Header>
									<Card.Body>
										<Image src={imag} width="120px" height="150px" />
										<div className="input mb-3">
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
		</div>
	);
};

export default SelectCateg;
