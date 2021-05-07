import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar, Row, Image } from "react-bootstrap";
import { Context } from "../../store/appContext";

export const CatDest = () => {
	const { id } = useParams();
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.getCategorias();
		actions.getUsuario();
	}, []);

	return (
		<Container>
			<Row>
				{store.categorias.sitios.map((item, index) => {
					return (
						<Col key={index}>
							<br />
							<Card style={{ width: "18rem" }}>
								<Image src={item.portada} rounded className="card-img-top" />
								<Card.Body>
									<Card.Title>{item.nombre}</Card.Title>
									<Link to={`/singleDest/${id}`}>
										<Button variant="primary">{item.nombre}+ Info</Button>
									</Link>
									<Button variant="outline-dark">
										<i className="far fa-heart" />
									</Button>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
