import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";
import { Collapse } from "./collapse.js";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />

			<h1>Hello Danny!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
			<Collapse />
		</div>
	);
}
