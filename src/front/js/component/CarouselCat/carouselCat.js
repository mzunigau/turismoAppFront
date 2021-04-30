import React from "react";
import { Carousel } from "react-bootstrap";
import CardCatA from "../CardCat/cardCatA";
import CardCatB from "../CardCat/cardCatB";
import CardCatC from "../CardCat/cardCatC";

const CarouselCat = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<CardCatA />
			</Carousel.Item>

			<Carousel.Item>
				<CardCatB />
			</Carousel.Item>

			<Carousel.Item>
				<CardCatC />
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselCat;
