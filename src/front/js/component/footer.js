import React, { Component } from "react";
import { Image } from "react-bootstrap";
import LogoApp from "../../img/ColibrisLogo.png";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Image src={LogoApp} width="120px" height="100%" />
		<h6>Siempre buscando por ti</h6>
	</footer>
);
