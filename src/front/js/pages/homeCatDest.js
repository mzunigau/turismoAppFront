import React, { useContext } from "react";
import { Jumbotron } from "../component/CategoriasDest/Jumbotron";
import { Footer } from "../component/CategoriasDest/Footer";
import CatDest from "../component/catDest/Card";
//create your first component

export const HomeCatDest = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid mb-3">
			<Jumbotron />
			<CatDest />
		</div>
	);
};
