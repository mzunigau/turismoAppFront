import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar, Row, Image } from "react-bootstrap";

const AllCateg = () => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.getSitios();
	}, []);

	return (
		<Container>
			<Row>
				{store.sitios.map((item, index) => {
					return (
						<Col key={index}>
							<br />
							<Card style={{ width: "18rem" }}>
								<Image
									src="https://www.lacasadeel.net/wp-content/uploads/2014/12/Star-Wars-Logo.jpg"
									rounded
									className="card-img-top"
								/>
								<Card.Body>
									<Card.Title>{item}</Card.Title>
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

export default AllCateg;
