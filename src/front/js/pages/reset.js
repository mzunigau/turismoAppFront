import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Reset = () => {
	const { store, actions } = useContext(Context);
	const param = useParams();
	let id = param.id;
	const [count, setCount] = useState(false);
	const [tempP, setTempP] = useState();
	const [newP, setNewP] = useState();

	return count ? (
		<div className="container">
			<div className="row border rounded p-4">
				<div className="alert alert-success" role="alert">
					Su contraseña ha sido cambiada satisfactoriamente.
				</div>
			</div>
		</div>
	) : (
		<div className="container">
			<div className="row border rounded p-4">
				<div className="col-md-12 text-center">
					<h2 className="text-center">Escriba el código temporal y la nueva contraseña</h2>
				</div>
				<div className="col-md-12 mt-4">
					<div className="form-group row">
						<div className="col">
							<input
								type="text"
								onChange={e => actions.setTempPass(e.target.value)}
								value={tempP}
								className="form-control"
								name="temp"
								placeholder="Password temporal"
							/>
							<input
								type="text"
								onChange={e => actions.setNewPass(e.target.value)}
								value={newP}
								className="form-control mt-2"
								name="newPassword"
								placeholder="Nueva contraseña"
							/>
						</div>
					</div>
					<div className="form-group row">
						<div className="col">
							<button
								onClick={() => {
									actions.resetPassword(id);
									setCount(true);
									setNewP("");
									setTempP("");
								}}
								className="btn btn-primary form-control">
								Cambiar contraseña
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
