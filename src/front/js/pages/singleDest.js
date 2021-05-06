import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import logo_bed from "../../img/icono_bed.png";
import LogoDining from "../../img/icono_dining.png";
import Logobank from "../../img/banco.png";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(() => {
		actions.getSitiosID(id);
	}, []);
	console.log(id, "este es el id");
	return (
		<Container>
			<Jumbotron className="jumbo mt-5">
				{store.sitiosID && (
					<>
						<h1 className="fw-300 text-center">
							<i>{store.sitiosID && store.sitiosID.nombre}</i>
						</h1>
						<br />
						<br />
						<img src={store.sitiosID && store.sitiosID.portada} width="1050px" />
						<br />
						<br />
						<div className="resumen-propiedad">
							<ul className="iconos-caracteristicas">
								<li>
									<img src={logo_bed} alt="Icono Hotel" width="100px" height="100px" />
								</li>

								<li>
									<img src={Logobank} alt="icono Bank" width="100px" height="100px" />
								</li>

								<li>
									<img src={LogoDining} alt="icono Dining" width="100px" height="100px" />
								</li>
							</ul>
						</div>
						<main className="contenedor seccion contenido-centrado texto-entrada">
							<div>
								<p>{store.sitiosID && store.sitiosID.comentarios}</p>
							</div>
							<div
								className="fb-comments"
								data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
								data-width="100%"
								data-numposts="5"></div>
						</main>
					</>
				)}
			</Jumbotron>
		</Container>
	);
};
