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
	const params = useParams();
	let id = params.id;

	console.log("params.id", params);

	const sitio = store.sitios.filter(sitios => sitios.id == id);

	console.log("sitio: ", sitio);

	return (
		<Container>
			<Jumbotron className="jumbo">
				<h1 className="fw-300"> {sitio.nombre} </h1>
				<br />
				<br />
				<img src={sitio.portada} alt="imagen destacados" />
				<br />
				<br />
				<div className="resumen-propiedad">
					<ul className="iconos-caracteristicas">
						<li>
							<img src={logo_bed} alt="Icono Hotel" />
						</li>

						<li>
							<img src={Logobank} alt="icono Bank" />
						</li>

						<li>
							<img src={LogoDining} alt="icono Dining" />
						</li>
					</ul>
				</div>
				<main className="contenedor seccion contenido-centrado texto-entrada">
					<div>
						<p>{sitio.comentarios}</p>
					</div>
					<div>
						<div id="fb-root" />
						<script
							async
							defer
							crossOrigin="anonymous"
							src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v10.0"
							nonce="wIJbAWbv"
						/>
						<div
							className="fb-comments"
							data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
							data-width="40%"
							data-numposts="4"
						/>
					</div>
				</main>
				);
			</Jumbotron>
		</Container>
	);
};

// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { Container, Jumbotron, Col, Image } from "react-bootstrap";

// export const Single = () => {
// 	return (
// 		<Container>
// 			<h1 className="fw-300"> Playa Tamarindo </h1>
// 			<br />
// 			<br />
// 			<img
// 				src="https://cdn.ssl-socket.com/wp-content/uploads/2018/08/a_13699735-a.jpg"
// 				fluid
// 				alt="imagen destacados"
// 			/>
// 			<br />
// 			<br />
// 			<div className="resumen-propiedad">
// 				<p className="precio">Entrada Gratuita</p>
// 				<ul className="iconos-caracteristicas">
// 					<li>
// 						{" "}
// 						<img src="../../img/icono_bed.png" alt="Icono Hotel" />
// 					</li>

// 					<li>
// 						<img src="/img/banco.png" alt="icono Bank" />
// 					</li>

// 					<li>
// 						<img src="src/img/icono_dining.png" alt="icono Dining" />
// 					</li>
// 				</ul>
// 			</div>
// 			<main className="contenedor seccion contenido-centrado texto-entrada">
// 				<div>
// 					<p>
// 						{" "}
// 						Piense en un verdadero paraíso tropical y seguramente estará pensando en un lugar como
// 						Tamarindo, el cual se encuentra a en la costa pacifico norte de Costa Rica. Si bien es cierto,
// 						algunas de las playas más hermosas de Costa Rica son de difícil acceso, Tamarindo se ha forjado
// 						una reputación sumamente popular, para que todos los visitantes puedan disfrutar de la belleza
// 						de esta ciudad de playa de Guanacaste
// 						<br />
// 						El Surf es muy popular en Tamarindo, ya sea que desee practicarlo o simplemente ver a los
// 						surfistas desde la playa. Esta zona es un buen lugar para los surfistas novatos - incluso las
// 						olas y el viento son conocidos por ser tranquilos, por lo que los que sólo tienen un poco de
// 						experiencia serán capaces de surfear muy fácilmente.
// 						<br />
// 						Si usted no tiene la experiencia necesaria, siempre puede inscribirse en algunas clases de surf.
// 						Tamarindo será un lugar inolvidable para aprender los fundamentos básicos de la práctica del
// 						surf. Si usted es más experimentado, podrá inscribirse en tour personalizados de surf.
// 						<br />
// 						Hay gran variedad de paseos en veleros y tours de kayak disponibles para todas las personas
// 						interesadas. Aquellos que buscan de la pesca deportiva, también tendrán mucha suerte. La pesca
// 						deportiva en Tamarindo es conocida en el mundo entero por sus enormes peces. La zona es un punto
// 						caliente para el pez marlin, pez vela y muchos otros.
// 					</p>
// 				</div>
// 				<div>
// 					<div id="fb-root" />
// 					<script
// 						async
// 						defer
// 						crossOrigin="anonymous"
// 						src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v10.0"
// 						nonce="wIJbAWbv"
// 					/>
// 					<div
// 						className="fb-comments"
// 						data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
// 						data-width="40%"
// 						data-numposts="4"
// 					/>
// 				</div>
// 			</main>
// 		</Container>
// 	);
// };
