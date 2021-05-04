import React, { useState, useContext, useEffect } from "react";
import { Tabs, Tab, Card, Button } from "react-bootstrap";
// import { PillsCard } from "./pillsCard";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const TabNav = () => {
	const { store, actions } = useContext(Context);

	console.log(store.usuario.categorias[0]);
	return (
		<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
			{store.usuario.categorias.map((categoria, index) => {
				return (
					<Tab key={index} eventKey={categoria.nombre} title={categoria.nombre}>
						{categoria.sitios.map((sitio, id) => {
							<Card key={id}>
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>{sitio.nombre}</Card.Title>
									<Link to={`/single/${sitio.id}`}>
										<Button variant="primary">{sitio.nombre}</Button>
									</Link>
								</Card.Body>
							</Card>;
						})}
					</Tab>
				);
			})}
		</Tabs>
	);
};
