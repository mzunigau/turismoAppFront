import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardCatB = () => {
	return (
		<CardDeck>
			<Card>
				<Card.Img
					variant="top"
					src="https://conozcasucanton.com/wp-content/uploads/sites/11/2016/06/turubari.jpg"
					witdh="900px"
					heigth="900px"
				/>
				<Card.Body>
					<Card.Title>
						<Link to="/CatDest/4">Aventura</Link>
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
					src="https://www.sancarlosdigital.com/wp-content/uploads/2018/10/Aguas-terma%C3%B1es.jpg"
					witdh="900px"
					heigth="900px"
				/>
				<Card.Body>
					<Card.Title>
						<Link to="/CatDest/5">Relax</Link>
					</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional content.{" "}
					</Card.Text>
				</Card.Body>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://www.proimagencostarica.com/wp-content/uploads/2019/03/borrar-carnaval-puntarenas-2.jpg"
					witdh="900px"
					heigth="900px"
				/>
				<Card.Body>
					<Card.Title>
						<Link to="/CatDest/6">Fiesta</Link>
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
