import { Context } from "../store/appContext";
import React from "react";
import { Container, InputGroup, Button, Image, Row, FormGroup, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoImg from "../../img/Imagen1.png";
import "../../styles/login.scss";

const SignUp = () => {
	return (
		<div id="body-login">
			<Container id="contenedor1" className="text-center p-3">
				<Image src={LogoImg} width={200} height={200} />
				<Row className="justify-content-center">
					<Col className="col-md-4 formulary">
						<Form action="">
							<FormGroup className="text-center pb-3">
								<h1 className="text-light">Register</h1>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input type="text" className="form-control" placeholder="Username" />
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input type="text" className="form-control" placeholder="Country" />
							</FormGroup>
							<FormGroup controlId="exampleForm.ControlSelect1">
								<Form.Control as="select">
									<option>Select Role</option>
									<option>Tourist</option>
								</Form.Control>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input type="text" className="form-control" placeholder="E-mail" />
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input type="password" className="form-control" placeholder="Password" />
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<Link to="/home">
									<Button className="btn btn-block signup">Register</Button>
								</Link>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SignUp;
