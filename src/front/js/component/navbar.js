import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/searchBar";
import DropLogin from "./DropLogin/dropLogin";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">CRide</span>
			</Link>

			<SearchBar />

			<DropLogin />
		</nav>
	);
};
