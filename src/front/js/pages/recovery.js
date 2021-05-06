import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Recovery = () => {
	const { store, actions } = useContext(Context);
	const [alert, setAlert] = useState(false);

	return (
		<div className="container">
			<div className="row border rounded p-4">
				<div className="col-md-12">
					{alert ? (
						<div className="alert alert-success" role="alert">
							Se ha enviado un correo electrónico
						</div>
					) : null}
					<h2>Solicitar cambio de contraseña</h2>
				</div>
				<div className="col-md-12 mt-4">
					<div className="form-group row">
						<div className="col-sm-10">
							<input
								type="text"
								onChange={e => actions.setEmail(e.target.value)}
								className="form-control"
								name="email"
								placeholder="Email"
							/>
						</div>
						<div className="col-sm-2">
							<button onClick={() => actions.recoveryEmail()} className="btn btn-primary form-control">
								Solicitar contraseña
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
