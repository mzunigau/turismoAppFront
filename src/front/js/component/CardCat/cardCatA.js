import React from "react";
import { Card, CardDeck, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardCatA = () => {
	return (
		<CardDeck>
			<Card>
				<Card.Img
					variant="top"
					src="https://www.momondo.es/discover/wp-content/uploads/sites/242/2017/12/dest_costa-rica_limon_puerto-viejo-de-talamanca_gettyimages-480157204_universal_within-usage-period_39238.jpg"
					witdh="900px"
					heigth="900px"
				/>
				<Card.Body>
					<Card.Title>
						<Link to="/CatDest/1">Playa</Link>
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
					src="https://viajes.nationalgeographic.com.es/medio/2019/05/24/la-tragedia-de-1968_98177bd5_1254x837.jpg"
					witdh="900px"
					heigth="800px"
				/>
				<Card.Body>
					<Card.Title>
						<Link to={`/CatDest/2`}>Montaña</Link>
					</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional content.{" "}
					</Card.Text>
				</Card.Body>
			</Card>

			<Card>
				<Card.Img
					variant="top"
					src="https://p4.wallpaperbetter.com/wallpaper/729/1010/515/nature-costa-rica-rivers-1920x1200-nature-rivers-hd-art-wallpaper-preview.jpg"
					witdh="900px"
					heigth="900px"
				/>
				<Card.Body>
					<Card.Title>
						<Link to="/CatDest/3">Ríos</Link>
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

export default CardCatA;
