import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import CarouselCar from "../component/CarouselCat/carouselCat";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Costa Rica Ride</h1>
			<CarouselCar />
		</div>
	);
};
