import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import logo_bed from "../../img/icono_bed.png"
import LogoDining from "../../img/icono_dining.png";
import Logobank from "../../img/banco.png";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let id = params.uid;

    const sitio = store.sitios.filter(sitios => sitios.id == id);
    
    useEffect(() => {
		actions.getSitiosID(id);
	}, []);

    return (
        <Container>
            <Jumbotron className="jumbo">
                	{store.sitiosID && (
                <>
            <h1 className="fw-300"> {sitio.nombre} </h1>
            <br />
            <br />
            <img
                src={store.sitiosID && store.sitiosID.portada}
                alt="imagen destacados"
            />
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
                    <p>
                        {sitio.comentarios}
                    </p>
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
            </>
            )}
            </Jumbotron>
        </Container>
    );
};
