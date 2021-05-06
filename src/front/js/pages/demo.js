import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="form-group row">
						<label className="col-form-label col-sm-2">Solicitar cambio de contraseña</label>
						<div className="col-sm-6">
							<input type="text" className="form-control" name="email" />
						</div>
					</div>
				</div>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</div>
	);
};
