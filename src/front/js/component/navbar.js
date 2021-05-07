import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import ButtonFav from "./ButtonFav/buttonFav";
import DropLogin from "./DropLogin/dropLogin";
import LogoApp from "../../img/ColibrisLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/home">
				<Image src={LogoApp} width="120px" height="100%" />
			</Link>

			<ButtonFav />

			<Link to="/selectCateg">
				<p>Mis Categorías</p>
			</Link>

			<DropLogin />
		</nav>
	);
};
