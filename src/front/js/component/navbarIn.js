import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap"
import SearchBar from "./SearchBar/searchBar";
import DropLogin from "./DropLogin/dropLogin";
import LogoApp from "../../img/CRideLogo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
                <Image src={LogoApp} width="200px" height="200px" />
			</Link>
			<DropLogin />
		</nav>
	);
};
