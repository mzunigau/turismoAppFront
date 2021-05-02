import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardCatB = () => {
	return (
		<CardDeck>
			<Card>
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mixbmSL0x86owchdeNponfEAMHYr7oK15g&usqp=CAU"
				/>
				<Card.Body>
					<Card.Title>
						<Link to="/homeCatDest">Aventura</Link>
					</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</Card.Text>
				</Card.Body>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mixbmSL0x86owchdeNponfEAMHYr7oK15g&usqp=CAU"
				/>
				<Card.Body>
					<Card.Title>
						<Link to="/homeCatDest">Relax</Link>
					</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional content.{" "}
					</Card.Text>
				</Card.Body>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mixbmSL0x86owchdeNponfEAMHYr7oK15g&usqp=CAU"
				/>
				<Card.Body>
					<Card.Title>
						<Link to="/homeCatDest">Fiesta</Link>
					</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show that equal height action.
					</Card.Text>
				</Card.Body>
			</Card>
		</CardDeck>
	);
};

export default CardCatB;
