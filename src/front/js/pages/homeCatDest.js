import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { Jumbotron } from "../component/CategoriasDest/Jumbotron";
import { CatDest } from "../component/CategoriasDest/CatDest";
import { Footer } from "../component/CategoriasDest/Footer";
//create your first component

export const HomeCatDest = () => {
	return (
		<Container>
			<div className="container-fluid mb-3">
				<Jumbotron />
				<CatDest />
			</div>
		</Container>
	);
};
