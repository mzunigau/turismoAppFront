import React from "react";

export function Card() {
	const cardNames = ["Manuel Antonio", "Jaco", "Playa Hermosa", "Tesoro escondido"];
	const CardBody = cardNames.map((singleCard, i) => {
		return (
			<div key={i} className="card">
				<img
					src="https://cdn.ssl-socket.com/wp-content/uploads/2018/08/a_13699735-a.jpg"
					className="card-img-top"
				/>
				<div className="card-body">
					<h5 className="card-title">{singleCard}</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</p>
					<a href="" className="btn btn-primary">
						+info
					</a>
					<a href="#" className="btn btn-primary">
						♥
					</a>
				</div>
			</div>
		);
	});
	return <div className="d-flex flex-row">{CardBody}</div>;
}
