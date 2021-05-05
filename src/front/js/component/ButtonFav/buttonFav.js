import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ButtonFav = () => {
	return (
		<NavDropdown id="collasible-nav-dropdown" title="Favoritos">
			<NavDropdown.Item href="#action/3.1">Favoritos</NavDropdown.Item>
		</NavDropdown>
	);
};

export default ButtonFav;
