import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const DropLogin = () => {
	return (
		<NavDropdown title="LogIn" id="collasible-nav-dropdown">
			<Link to="/login">
				<NavDropdown.Item href="#action/3.1">LogIn</NavDropdown.Item>
			</Link>
			<NavDropdown.Item href="#action/3.2">Favoritos</NavDropdown.Item>
			<NavDropdown.Divider />
			<NavDropdown.Item href="#action/3.4">LogOut</NavDropdown.Item>
		</NavDropdown>
	);
};

export default DropLogin;
