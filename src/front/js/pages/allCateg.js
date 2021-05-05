import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context, useHistory } from "../store/appContext";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar, Row, Image } from "react-bootstrap";

const AllCateg = () => {
	const { actions, store } = useContext(Context);
	const [favoritos, setFavoritos] = useState("");

	const CheckFavoritos = (event, favSelected) => {
		if (event.target.checked == true) {
			store.usuario.sitios_favoritos.push(favSelected);

			console.log(store.usuario, "checked");
		} else {
			store.usuario.sitios.splice(
				store.usuario.sitios_favoritos.findIndex(v => v.id === favSelected.id),
				1
			);
		}
	};

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
								<Image src={item.portada} rounded className="card-img-top" />
								<Card.Body>
									<Card.Title>{item.nombre}</Card.Title>
									<Link>
										<Button variant="primary">Go to details</Button>
									</Link>
									<input
										className="form-check-input"
										type="checkbox"
										value={false}
										id="invalidCheck2"
										onChange={e => CheckFavoritos(e, item)}
									/>
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
