import { Container, Jumbotron, Col, Image } from "react-bootstrap";
import React from "react";

export const Single = () => {
	return (
		<Container>
			<h1 className="fw-300"> Playa Tamarindo </h1>
			<br />
			<br />
			<img
				src="https://news.co.cr/wp-content/themes/newszine/tim/timthumb.php?src=https://news.co.cr/wp-content/uploads/2017/06/sunset-the-costa-rica-star.jpg&h=565"
				fluid
				alt="imagen destacados"
			/>
			<br />
			<br />
			<div className="resumen-propiedad">
				<p className="precio">Entrada Gratuita</p>
				<ul className="iconos-caracteristicas">
					<li>
						{" "}
						<img src="../../img/icono_bed.png" alt="Icono Hotel" />
					</li>

					<li>
						<img src="/img/banco.png" alt="icono Bank" />
					</li>

					<li>
						<img
							src="src/img/icono_dining.png"
							alt="icono Dining"
						/>
					</li>
				</ul>
			</div>
			<main className="contenedor seccion contenido-centrado texto-entrada">
				<div>
					<p>
						{" "}
						Piense en un verdadero paraíso tropical y seguramente
						estará pensando en un lugar como Tamarindo, el cual se
						encuentra a en la costa pacifico norte de Costa Rica. Si
						bien es cierto, algunas de las playas más hermosas de
						Costa Rica son de difícil acceso, Tamarindo se ha
						forjado una reputación sumamente popular, para que todos
						los visitantes puedan disfrutar de la belleza de esta
						ciudad de playa de Guanacaste
						<br />
						El Surf es muy popular en Tamarindo, ya sea que desee
						practicarlo o simplemente ver a los surfistas desde la
						playa. Esta zona es un buen lugar para los surfistas
						novatos - incluso las olas y el viento son conocidos por
						ser tranquilos, por lo que los que sólo tienen un poco
						de experiencia serán capaces de surfear muy fácilmente.
						<br />
						Si usted no tiene la experiencia necesaria, siempre
						puede inscribirse en algunas clases de surf. Tamarindo
						será un lugar inolvidable para aprender los fundamentos
						básicos de la práctica del surf. Si usted es más
						experimentado, podrá inscribirse en tour personalizados
						de surf.
						<br />
						Hay gran variedad de paseos en veleros y tours de kayak
						disponibles para todas las personas interesadas.
						Aquellos que buscan de la pesca deportiva, también
						tendrán mucha suerte. La pesca deportiva en Tamarindo es
						conocida en el mundo entero por sus enormes peces. La
						zona es un punto caliente para el pez marlin, pez vela y
						muchos otros.
					</p>
				</div>
				<div>
					<div id="fb-root"></div>
					<script
						async
						defer
						crossOrigin="anonymous"
						src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v10.0"
						nonce="wIJbAWbv"></script>
					<div
						className="fb-comments"
						data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
						data-width="40%"
						data-numposts="4"></div>
				</div>
			</main>
		</Container>
	);
};
