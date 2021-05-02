import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import CarouselCat from "../component/CarouselCat/carouselCat";
import ButtonCat from "../component/ButtonCat/buttonCat";
import { TabNav } from "../component/PillsCat/tabNav";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Costa Rica Ride</h1>
			<CarouselCat />
			<h1>Lugares más populares</h1>
			<TabNav />
			<ButtonCat />
		</div>
	);
};
