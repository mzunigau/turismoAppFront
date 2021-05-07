import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import ButtonFav from "./ButtonFav/buttonFav";
import DropLogin from "./DropLogin/dropLogin";
import LogoApp from "../../img/CRideLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<Image src={LogoApp} width="80px" height="80px" />
			</Link>
<<<<<<< HEAD
			<div className="ml-auto">
				<Link to="/recovery">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
=======

			<ButtonFav />

			<DropLogin />
>>>>>>> eac484813ebc303e227aa89500333f5b2d9bac5f
		</nav>
	);
};
