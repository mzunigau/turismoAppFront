import { Context } from "../store/appContext";
import React from "react";
import { Container, InputGroup, Button, Image, Row, FormGroup, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoImg from "../../img/Imagen1.png";
import "../../styles/login.scss";

const Login = () => {
	return (
		<>
			<Container id="contenedor1" className="text-center p-3">
				<Image src={LogoImg} width={200} height={200} />
				<Row className="justify-content-center">
					<Col className="col-md-4 formulary">
						<Form action="">
							<FormGroup className="text-center pb-3">
								<h1 className="text-light">Login</h1>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input type="text" className="form-control" placeholder="Username" required />
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input type="password" className="form-control" placeholder="Password" required />
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<Link to="/home">
									<Button className="btn btn-block signin">Login</Button>
								</Link>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3 text-center">
								<Link to="/signup">
									<input
										type="submit"
										className="btn btn-block register"
										value="Create New Account"
									/>
								</Link>
							</FormGroup>

							<Link to="/forgotPass">
								<input className="btn btn-block forgotPass" value="Forgot your password?" />
							</Link>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Login;
