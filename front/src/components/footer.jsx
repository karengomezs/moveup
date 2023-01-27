import React from "react";

export default function Footer() {
	return (
		<footer className="text-center text-lg-start text-white bg-primary px-sm-2 px-md-5">
			<section className="d-flex justify-content-between">
				<div className="d-flex text-lg fw-bold p-3 align-items-center">
					<i className="bi bi-c-circle fw-bold fs-4" />
					<span>&nbsp;2023 Digital Booking</span>
				</div>
				<div className="d-flex justify-content-end p-3 gap-5 d-none d-md-flex">
					<i className="bi bi-facebook fs-4" />
					<i className="bi bi-linkedin fs-4" />
					<i className="bi bi-twitter fs-4" />
					<i className="bi bi-instagram fs-4" />
				</div>
			</section>
		</footer>
	);
}
