import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<NavBar>n</NavBar>
			<div className="d-flex row text-align-center">
				<header>h</header>
				<Jumbotton className="col-2">c1</Jumbotton>
				<Jumbotton className="col-2">c2</Jumbotton>
				<Jumbotton className="col-2">c3</Jumbotton>
				<Jumbotton className="col-2">c4</Jumbotton>
			</div>
			<footer>f</footer>
		</div>
	);
}
