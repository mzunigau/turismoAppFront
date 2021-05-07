import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ButtonCat = () => {
	return (
		<Link to="/allCateg">
			<Button variant="success" size="lg" block>
				Mostrar todos los sitios
			</Button>
		</Link>
	);
};

export default ButtonCat;
