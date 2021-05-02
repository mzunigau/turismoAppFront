import React from "react";
import { Carousel } from "react-bootstrap";
import CardCatA from "../CardCat/cardCatA";
import CardCatB from "../CardCat/cardCatB";

const CarouselCat = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<CardCatA />
			</Carousel.Item>

			<Carousel.Item>
				<CardCatB />
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselCat;
