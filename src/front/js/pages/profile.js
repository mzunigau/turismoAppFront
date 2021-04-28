import { Context } from "../store/appContext";
import React, { Component } from "react";
import { Container, InputGroup, Button, Image, Row, FormGroup, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PlaceHolder from "../../img/placeHolder.jpg";
import "../../styles/profile.scss";

const Profile = () => {
	return (
		<div id="body-profile">
			<Container>
				<Row className="row">
					<div className="part-left col-md-3 mx-3">
						<Image src={PlaceHolder} width="200px" heigth="190px" rounded className="mt-3" />
						<div>
							<input className="mt-3 mb-3" type="file" name="image-upload" id="input" accept="image/*" />
						</div>
						<div>
							<label htmlFor="input" className="image-upload">
								<i className="far fa-image" /> Choose your photo
							</label>
						</div>
					</div>

					<div className="panel col-md-8">
						<div className="panel-body bio-graph-info">
							<h2>Personal Information</h2>
							<br />
							<div className="bio-row">
								<p>
									<span>
										<strong>Username</strong>{" "}
									</span>
									CristinaCasch
								</p>
							</div>
							<div className="bio-row">
								<p>
									<span>
										<strong>Country:</strong>
									</span>{" "}
									Japon
								</p>
							</div>
							<div className="bio-row">
								<p>
									<span>
										<strong>Role:</strong>
									</span>{" "}
									Tourist
								</p>
							</div>
							<div className="bio-row">
								<p>
									<span>
										<strong>Email:</strong>
									</span>{" "}
									criscastro1926@gmail.com
								</p>
							</div>
						</div>
					</div>
				</Row>
				<div className="description col-md-12">
					<h2>About me:</h2>
					<p>
						<span>
							<strong>I am a passionate tourist, looking for new experiences</strong>
						</span>{" "}
					</p>
				</div>
			</Container>
		</div>
	);
};

export default Profile;
