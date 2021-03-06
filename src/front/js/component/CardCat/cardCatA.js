import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

const CardCatA = () => {
	return (
		<CardDeck>
			<Card>
				<Card.Img
					variant="top"
					src="https://www.procomer.com/wp-content/uploads/2020/01/porque_costarica.jpg"
				/>
				<Card.Body>
					<Card.Title>Aventura</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Ir a Aventura</Button>
				</Card.Footer>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://www.procomer.com/wp-content/uploads/2020/01/porque_costarica.jpg"
				/>
				<Card.Body>
					<Card.Title>Relax</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional content.{" "}
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Ir a Relax</Button>
				</Card.Footer>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://www.procomer.com/wp-content/uploads/2020/01/porque_costarica.jpg"
				/>
				<Card.Body>
					<Card.Title>Deportivo</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show that equal height action.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Ir a Deportivo</Button>
				</Card.Footer>
			</Card>
		</CardDeck>
	);
};

export default CardCatA;
