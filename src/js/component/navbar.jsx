import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
			<div className="container-fluid mx-2">
				<a className="navbar-brand" href="#">React landing page</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav position-absolute end-0 mx-2">
						<a className="nav-link active" aria-current="page">Home</a>
						<a className="nav-link">Services</a>
						<a className="nav-link">Contact</a>
						<a className="nav-link">About</a>
					</div>
				</div>
			</div>
		</nav>
	);
}