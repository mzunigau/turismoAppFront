import { Context } from "../store/appContext";
import React, { useContext, useState, useEffect } from "react";
import { Container, InputGroup, Button, Image, Row, FormGroup, Col, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ColibriIso from "../../img/ColibriIso.png";
import "../../styles/login.scss";

const Register = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setname] = useState("");

	const history = useHistory();

	useEffect(() => {
		if (store.register) {
			alert("successful register");
			// history.push("/selectCateg");
		}
	});

	return (
		<div id="body-login">
			<Container id="contenedor1" className="text-center p-3">
				<Image src={ColibriIso} width="120px" height="100%" />
				<Row className="justify-content-center">
					<Col className="col-md-4 formulary">
						<Form action="">
							<FormGroup className="text-center pb-3">
								<h1 className="text-light">Register</h1>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input
									type="text"
									className="form-control"
									placeholder="E-mail"
									onChange={e => setEmail(e.target.value)}
								/>
							</FormGroup>

							<FormGroup className="mx-sm-4 pb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Nombre"
									onChange={e => setname(e.target.value)}
								/>
							</FormGroup>

							{/* <FormGroup className="mx-sm-4 pb-3">
								<input type="text" className="form-control" placeholder="Country" />
							</FormGroup> */}
							{/* <FormGroup controlId="exampleForm.ControlSelect1">
								<Form.Control as="select">
									<option>Select Role</option>
									<option>Tourist</option>
								</Form.Control>
							</FormGroup> */}

							<FormGroup className="mx-sm-4 pb-3">
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									onChange={e => setPassword(e.target.value)}
								/>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<Link to="/login">
									<Button
										className="btn btn-block signup"
										onClick={() => {
											actions.registerInit(email, name, password);
										}}>
										Register
									</Button>
								</Link>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Register;
