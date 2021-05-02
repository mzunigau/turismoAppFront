import React, { useContext } from "react";
import { Jumbotron } from "../component/CategoriasDest/Jumbotron";
import { Card } from "../component/CategoriasDest/Card";
import { Footer } from "../component/CategoriasDest/Footer";
//create your first component

export const HomeCatDest = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid mb-3">
			<Jumbotron />
			<Card />
		</div>
	);
};
