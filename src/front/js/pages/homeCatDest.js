import React from "react";
import { Jumbotron } from "../component/CategoriasDest/Jumbotron";
import { Card } from "../component/CategoriasDest/Card";
import { Footer } from "../component/CategoriasDest/Footer";
//create your first component
export function Home() {
	return (
		<div className="container-fluid mb-3">
			<Jumbotron />
			<Card />
		</div>
	);
}
