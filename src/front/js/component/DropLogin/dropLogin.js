import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const DropLogin = () => {
	const history = useHistory();

	return (
		<NavDropdown title="Perfil" id="collasible-nav-dropdown">
			<Link to="/login">
				<NavDropdown.Item href="#action/3.1">LogIn</NavDropdown.Item>
			</Link>
			<NavDropdown.Item
				href="#action/3.4"
				onClick={() => {
					actions.logOut();
					if (store.logOut == true) {
						history.push("/login");
					}
				}}>
				LogOut
			</NavDropdown.Item>
		</NavDropdown>
	);
};

export default DropLogin;
