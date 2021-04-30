import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import CarouselCat from "../component/CarouselCat/carouselCat";
import ButtonCat from "../component/ButtonCat/buttonCat";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Costa Rica Ride</h1>
			<CarouselCat />
			<h1>Tabs Categorías Haykel</h1>
			<ButtonCat />
		</div>
	);
};
