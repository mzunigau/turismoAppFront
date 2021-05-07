import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PillsCard = sitio => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={sitio.portada} />
			<Card.Body>
				<Card.Title>{sitio.nombre}</Card.Title>
				<Card.Text>{sitio.ubicacion}</Card.Text>
				<Link to={`/singleDest2/${sitio.id}`}>
					<Button variant="primary">{sitio.nombre}</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};
