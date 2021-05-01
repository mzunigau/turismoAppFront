import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardCatA = () => {
	return (
		<CardDeck>
			<Card>
				<Card.Img
					variant="top"
					src="https://www.procomer.com/wp-content/uploads/2020/01/porque_costarica.jpg"
				/>
				<Card.Body>
					<Card.Title>Playa</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Link to="/homeCatDest">
						<Button variant="primary">Ir a Playa</Button>
					</Link>
				</Card.Footer>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://www.procomer.com/wp-content/uploads/2020/01/porque_costarica.jpg"
				/>
				<Card.Body>
					<Card.Title>Montaña</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional content.{" "}
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Ir a Montaña</Button>
				</Card.Footer>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://www.procomer.com/wp-content/uploads/2020/01/porque_costarica.jpg"
				/>
				<Card.Body>
					<Card.Title>Ríos</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show that equal height action.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Ir a Ríos</Button>
				</Card.Footer>
			</Card>
		</CardDeck>
	);
};

export default CardCatA;
