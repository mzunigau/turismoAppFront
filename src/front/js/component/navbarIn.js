import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap"
import ButtonFav from "./ButtonFav/buttonFav";
import DropLogin from "./DropLogin/dropLogin";
import LogoApp from "../../img/CRideLogo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				{/* <span className="navbar-brand mb-0 h1">CRide</span> */}
                <Image src={LogoApp} width="200px" height="200px" />
			</Link>

			<ButtonFav />

			<DropLogin />
		</nav>
	);
};
