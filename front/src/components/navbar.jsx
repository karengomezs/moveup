import React from "react";
import logo from "../images/logo1.png";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-md bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand grid" href="/">
					<img src={logo} className="img-fluid" alt="logo"/>
					<span className="align-bottom m-3 d-none d-lg-inline">
						Sientete como en tu hogar
					</span>
				</a>
				<button
					className="navbar-toggler border border-0 shadow-none"
					type="button"
					data-bs-toggle="modal"
					data-bs-target="#navbarMenu"
					aria-controls="navbarMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse grid gap-4 justify-content-end"
					id="navbarSupportedContent"
				>
					<button className="btn btn-outline-success px-4" type="submit">
						Crear cuenta
					</button>
					<button className="btn btn-outline-success px-4" type="submit">
						Iniciar Sesion
					</button>
				</div>
				<div
					className="modal fade"
					id="navbarMenu"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-fullscreen">
						<div className="modal-content">
							<div className="modal-header  h-50 bg-secondary justify-content-start align-items-start ">
								<button
									type="button"
									className="btn-close m-0"
									data-bs-dismiss="modal"
									aria-label="Close"
								/>
							</div>
							<div className="modal-body d-flex flex-column justify-content-start align-items-end">
								<button className="btn " type="submit">
									Crear cuenta
								</button>
								<button className="btn " type="submit">
									Iniciar Sesion
								</button>
							</div>
							<div className="modal-footer">
								<span>Social Media</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
