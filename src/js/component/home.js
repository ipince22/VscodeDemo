import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Navbar/>
		</div>
		<div className="text-center mt-5">
			<h1>Hello Danny!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
}
