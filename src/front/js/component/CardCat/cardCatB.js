import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

const CardCatB = () => {
	return (
		<CardDeck>
			<Card>
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mixbmSL0x86owchdeNponfEAMHYr7oK15g&usqp=CAU"
				/>
				<Card.Body>
					<Card.Title>Familiar</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Ir a Familiar</Button>
				</Card.Footer>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mixbmSL0x86owchdeNponfEAMHYr7oK15g&usqp=CAU"
				/>
				<Card.Body>
					<Card.Title>Amigos</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional content.{" "}
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Ir a Amigos</Button>
				</Card.Footer>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mixbmSL0x86owchdeNponfEAMHYr7oK15g&usqp=CAU"
				/>
				<Card.Body>
					<Card.Title>Negocios</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show that equal height action.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Ir a Negocios</Button>
				</Card.Footer>
			</Card>
		</CardDeck>
	);
};

export default CardCatB;
