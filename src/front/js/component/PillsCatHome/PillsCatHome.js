import React from "react";

export function PilssCatHome() {
	const PilssName = ["Playa", "Montana", "Relax", "Diversion", "Rios"];
	return (
		<div key={""} className="PilssCatHome">
			<div className="container">
				<h2> Destinos más populares</h2>
				<br />
				<ul className="nav nav-tabs" role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active"
							data-toggle="tab"
							href="#playa">
							Playa
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" data-toggle="tab" href="#rios">
							Ríos
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							data-toggle="tab"
							href="#montaña">
							Montaña
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							data-toggle="tab"
							href="#aventura">
							Aventura
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" data-toggle="tab" href="#relax">
							Relax
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							data-toggle="tab"
							href="#fiesta">
							Fiesta
						</a>
					</li>
				</ul>
                <div clasName="tab-content">
				<div id="playa" className="container tab-pane active">
					<br />
					<h3>Playa</h3>
					<p>
						{" "}
						lorem ipsum vitalis et sumari on totalitatus experience
					</p>
					<br />
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<a className="fh5co-card-item image-popup">
								<figure>
									<div className="overlay">
										<i className="ti-plus"></i>
									</div>
									<img
										src="https://www.bestcostaricadmc.com/wp-content/uploads/bfi_thumb/exploringthebestofcrpanama-preview-ozyhwlq8sddf5ydu4g1lhkgjciodpphe9gigod7s7c.jpg"
										alt="Image"
										className="img-responsive"
									/>
								</figure>
								<div className="fh5co-text">
									<h2>New York, USA</h2>
									<p>
										Far far away, behind the word mountains,
										far from the countries Vokalia..
									</p>
									<p>
										<span className="btn btn-primary">
											Más información
										</span>
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div id="montaña" className="container tab-pane fade">
					<br />
					<h3>Montaña</h3>
					<p>
						{" "}
						lorem ipsum vitalis et sumari on totalitatus experience
					</p>
					<br />
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<a className="fh5co-card-item image-popup">
								<figure>
									<div className="overlay">
										<i className="ti-plus"></i>
									</div>
									<img
										src="https://www.bestcostaricadmc.com/wp-content/uploads/bfi_thumb/exploringthebestofcrpanama-preview-ozyhwlq8sddf5ydu4g1lhkgjciodpphe9gigod7s7c.jpg"
										alt="Image"
										className="img-responsive"
									/>
								</figure>
								<div className="fh5co-text">
									<h2>New York, USA</h2>
									<p>
										Far far away, behind the word mountains,
										far from the countries Vokalia..
									</p>
									<p>
										<span className="btn btn-primary">
											Más información
										</span>
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
            </div>
		</div>
	);
}
