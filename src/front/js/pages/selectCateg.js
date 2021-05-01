import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";
import { Card, Row, Container, Col, Image } from "react-bootstrap";
import imgCateg from "../../img/playa.png";
import { Link, useHistory } from "react-router-dom";

const SelectCateg = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<div className="text-center">
							<h3>Select the Categories of preference</h3>
						</div>
						<Card border="primary" style={{ width: "18rem" }} className="text-center mt-5">
							<Card.Header>Playa</Card.Header>
							<Card.Body>
								<Image src={imgCateg} width="200px" height="200px" />
								<div className="mb-3">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="invalidCheck2"></input>
								</div>
							</Card.Body>
						</Card>
						<br />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SelectCateg;
