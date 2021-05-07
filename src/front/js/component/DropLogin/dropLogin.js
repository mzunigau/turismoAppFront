import React, { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../../store/appContext";

const DropLogin = () => {
	const history = useHistory();

	const { store, actions } = useContext(Context);

	return !localStorage.getItem("token") ? (
		<NavDropdown title="Perfil" id="collasible-nav-dropdown">
			<Link to="/login">
				<NavDropdown.Item href="#action/3.1">LogIn</NavDropdown.Item>
			</Link>
		</NavDropdown>
	) : (
		<NavDropdown title="Perfil" id="collasible-nav-dropdown">
			<Link to="/login">
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
			</Link>
		</NavDropdown>
	);
};

export default DropLogin;
