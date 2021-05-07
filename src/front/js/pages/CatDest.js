import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar, Row, Image } from "react-bootstrap";
import { Context } from "../store/appContext";

export const CatDest = () => {
	const { id } = useParams();
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.getCategID(id);
	}, []);

	return (
		<Container>
			<Row>
				{store.categID
					? store.categID.sitios.map((item, index) => {
							return (
								<Col key={index}>
									<Card style={{ width: "18rem" }} className="mt-5">
										<Image src={item.portada} rounded className="card-img-top" />
										<Card.Body>
											<Card.Title>{item.nombre}</Card.Title>
											<Link to={`/singleDest/${id}`}>
												<Button variant="primary">Go Details</Button>
											</Link>
											<input
												className="check-input"
												type="checkbox"
												value={false}
												id="invalidCheck2"
												onChange={e => CheckFavoritos(e, item)}
											/>
										</Card.Body>
									</Card>
								</Col>
							);
					  })
					: "loading"}
			</Row>
		</Container>
	);
};
