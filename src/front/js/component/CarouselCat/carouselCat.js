import React from "react";
import { Carousel } from "react-bootstrap";
import CardCatA from "../CardCat/cardCatA";
import CardCatB from "../CardCat/cardCatB";
import "../../../styles/carouselCat.scss";

const CarouselCat = () => {
	return (
		<div className="bg-home">
			<Carousel>
				<Carousel.Item>
					<CardCatA />
				</Carousel.Item>

				<Carousel.Item>
					<CardCatB />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CarouselCat;
