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
	const [favoritos, setFavoritos] = useState("");

	const CheckFavoritos = (event, favSelected) => {
		if (event.target.checked == true) {
			store.usuario.sitios_favoritos.push(favSelected);

			console.log(store.usuario, "checked");
		} else {
			store.usuario.sitios_favoritos.splice(
				store.usuario.sitios_favoritos.findIndex(v => v.id === favSelected.id),
				1
			);
			console.log(store.usuario, "unchecked");
		}
	};

	useEffect(() => {
		actions.getUsuario();
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

						<div className="ubicacion">
							<i className="fas fa-map-marker-alt">
								<strong>Ubicación:</strong>
							</i>
							<p>{store.sitiosID && store.sitiosID.ubicacion}</p>
						</div>
						<div>
							<div className="resumen-propiedad">
								<img src={logo_bed} alt="Icono Hotel" width="40px" height="40px" />
								<img src={Logobank} alt="icono Bank" width="40px" height="40px" />
								<img src={LogoDining} alt="icono Dining" width="40px" height="40px" />
							</div>
						</div>
					</>
				)}
			</Jumbotron>
		</Container>
	);
};
