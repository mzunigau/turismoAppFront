import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const DropLogin = () => {
	return (
		<NavDropdown title="Perfil" id="collasible-nav-dropdown">
			<Link to="/login">
				<NavDropdown.Item href="#action/3.1">LogIn</NavDropdown.Item>
			</Link>
		</NavDropdown>
	);
};

export default DropLogin;
