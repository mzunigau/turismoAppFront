import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

const CardCatC = () => {
	return (
		<CardDeck>
			<Card>
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafivVL1TdqrgORJOdav9YarRb441Nz7pBMQ&usqp=CAU"
				/>
				<Card.Body>
					<Card.Title>Cultural</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Ir a Cultural</Button>
				</Card.Footer>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafivVL1TdqrgORJOdav9YarRb441Nz7pBMQ&usqp=CAU"
				/>
				<Card.Body>
					<Card.Title>Gastronómico</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional content.{" "}
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Ir a Gastronómico</Button>
				</Card.Footer>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafivVL1TdqrgORJOdav9YarRb441Nz7pBMQ&usqp=CAU"
				/>
				<Card.Body>
					<Card.Title>Rural</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show that equal height action.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Ir a Rural</Button>
				</Card.Footer>
			</Card>
		</CardDeck>
	);
};

export default CardCatC;
