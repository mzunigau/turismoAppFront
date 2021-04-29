import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";
import { Container, InputGroup, Button, Image, Row, FormGroup, Col, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import LogoImg from "../../img/Imagen1.png";
import "../../styles/login.scss";

const Login = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const history = useHistory();

	useEffect(() => {
		actions.getToken();
		if (store.login) {
			history.push("/home");
		}
	}, []);

	return (
		<div id="body-login">
			<Container id="contenedor1" className="text-center p-3">
				<Image src={LogoImg} width={200} height={200} />
				<Row className="justify-content-center">
					<Col className="col-md-4 formulary">
						<Form action="">
							<FormGroup className="text-center pb-3">
								<h1 className="text-light">Login</h1>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Email"
									required
									onChange={e => setUser(e.target.value)}
								/>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									required
									onChange={e => setPass(e.target.value)}
								/>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<Button
									className="btn btn-block signin"
									onClick={() => {
										actions.loginInit(user, pass);
									}}>
									Login
								</Button>
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
		</div>
	);
};

export default Login;
